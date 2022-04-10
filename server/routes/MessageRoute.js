const express = require('express');
const router = express.Router();

const chatRoom = require('../models/Chat/ChatRoom')
const message = require('../models/Chat/Message')

router.get('/', async (req, res) => {
    const messages = await message.find();
    res.json(messages);
})


router.post('/', async (req, res) => {
    const message = new message(req.body);
    await message.save();
    res.json('Audio procesado');
})

router.put('/:id', async (req, res) => {
    await message.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'message Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await message.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'message Deleted'
    })
})

module.exports = router;