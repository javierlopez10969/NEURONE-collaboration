const express = require('express'),
    router = express.Router(),
    ChatRoom = require('../models/Chat/ChatRoom'),
    Message = require('../models/Chat/Message'),
    Socket = require('../utils/socket');

//Get all
router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
})

// GET all mesasages of certain group
router.get('/group/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    } else if (req.params.id != undefined) {
        const messages = await Message.find({
            "group_id": req.params.id
        });
        res.json(messages);
    }
})

router.post('/send-message', async (req, res) => {
    var message = req.body.message;
    var group = req.body.group;
    if (message.message && message.user && group) {
        delete message.user.password;
        message.group_id = group;
        message.message_type = "private"
        Socket.sendMessage(req.body.group, 'message', message);
        console.log(req.body.message)
        res.json({
            status: 'message sended'
        })
        const messageBD = new Message(message);
        await messageBD.save();
    } else {
        console.log("Not Naziiiiiiii")
    }

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

router.delete('/all/all/', async (req, res) => {
    await Message.deleteMany()
    return res.status(200).json({
        message: 'All message are deleted successfully'
    })
})

module.exports = router;