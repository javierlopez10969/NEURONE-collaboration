const express = require('express'),
    router = express.Router(),
    Message = require('../models/Chat/Message'),
    User = require('../models/User'),
    Socket = require('../utils/socket');
const mongoose = require('mongoose');
const {sendNotificationByKey} = require('../controllers/NotificationController')
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
        }).populate({
            path: 'user',
            model: User
          });
        res.json(messages);
    }
})

router.post('/send-message', async (req, res) => {
    var message = req.body.message;
    var group = req.body.group;
    if (message.message && message.user && group) {
        message.user = mongoose.Types.ObjectId(message.user._id)
        message.group_id = group;
        message.message_type = "private"
        const messageBD = new Message(message);
        await messageBD.save();
        const socketMessage = await messageBD.populate({
            path: 'user',
            model: User
          }) 
        Socket.sendMessage(req.body.group, 'message',socketMessage);
        Socket.sendMessage(req.body.group, 'notification', 'new ' + 'message');         
        sendNotificationByKey('chat', req.body.group, message.user._id);
        res.json({
            status: 'message sended'
        })
    } else {
        res.status(404);
        console.log("Error")
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