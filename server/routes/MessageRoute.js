const express = require('express');
const router = express.Router();

const ChatRoom = require('../models/Chat/ChatRoom')
const Message = require('../models/Chat/Message')

router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
})


router.post('/', async (req, res) => {
    const message = new Message(req.body);
    await message.save();
    res.json('Audio procesado');
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