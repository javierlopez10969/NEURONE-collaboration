const express = require('express');
const router = express.Router();

const Group = require('../models/Group')
const User = require('../models/User')
const ChatRoom = require('../models/Chat/ChatRoom')

// GET all groups
router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
})

// GET all groups of certain user
router.get('/user/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    }
    if (req.params.id != undefined) {
        user = await User.findById(req.params.id);
        const groups = await Group.find({
            "groups": user
        });
        res.json(groups);
    }
})
// GET all ID groups of certain user
router.get('/user/id/:id', async (req, res) => {
    if (req.params.id != undefined) {

        user = await User.findById(req.params.id);
        const groups = await Group.find({
            "groups": user
        }, {
            _id: 1
        });
        res.json(groups);
    }
})

router.post('/', async (req, res) => {
    userCreator = req.body.user;
    //Create a Chat Room
    const chatRoom = new ChatRoom({
        name: "General"
    });
    await chatRoom.save();
    const group = new Group(req.body.group);
    group.chatRooms.push(chatRoom._id);
    group.users.push(userCreator)
    //Update each user in the group
    group.users.forEach(user => {
        newUser = user.groups.push(group._id);
        User.findAndUpdate(newUser);
    })
    await group.save();

})

router.get('/:id', async (req, res) => {
    var group = await Group.findById(req.params.id)
    res.json({
        group
    })
})

//Update
router.put('/:id', async (req, res) => {
    await Group.findByIdAndUpdate(req.params.id, req.body.group)
    res.json({
        status: 'Group Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Group.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'Group Deleted'
    })
})
router.delete('/all/all/', async (req, res) => {
    await Group.deleteMany()
    return res.status(200).json({
        message: 'All user is deleted successfully'
    })
})

module.exports = router;