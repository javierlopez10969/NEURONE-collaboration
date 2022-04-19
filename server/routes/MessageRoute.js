const express = require('express'),
    router = express.Router(),
    ChatRoom = require('../models/Chat/ChatRoom'),
    Message = require('../models/Chat/Message'),
    Socket = require('../utils/socket');

router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
})


router.post('/send-message', async (req, res) => {
    Socket.sendMessage(req.body.group, 'message', req.body.message);
    //const message = new Message(req.body);
    //await message.save();
})

router.put('/:id', async (req, res) => {
    await Message.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'message Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Message.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'message Deleted'
    })
})

module.exports = router;