const express = require('express');
const router = express.Router();

const Group = require('../models/Group')
const User = require('../models/User')
const ChatRoom = require('../models/Chat/ChatRoom')

router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
})


router.post('/', async (req, res) => {
    //Create a Chat Room
    const chatRoom = new ChatRoom({
        name: "General"
    });
    await chatRoom.save();
    const group = new Group(req.body.group);
    group.chatRooms.push(chatRoom._id);
    await group.save();
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