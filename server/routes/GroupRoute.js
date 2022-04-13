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
    user = await User.findById(req.params.id);
    const groups = await Group.find({
        "groups": user
    });
    res.json(groups);
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
    await group.save();
    //Update each user in the group
    group.users.forEach(user => {
        newUser = user.groups.push(group._id);
        User.findByIdAndUpdate(user._id, newUser);
    })
})
router.get('/user/:id', async (req, res) => {
    const user = User.findById(req.params.id);
    const groups = await Group.find({
        users: user
    });
    res.json(groups);
})
//ID of the user
router.put('/:id', async (req, res) => {
    await Group.findByIdAndUpdate(req.params.id, req.body)
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