const express = require('express'),
    router = express.Router(),
    Task = require('../models/Task'),
    User = require('../models/User'),
    Socket = require('../utils/socket');
const mongoose = require('mongoose');
const {sendNotificationByKey} = require('../controllers/NotificationController')
//Get all
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

// GET all mesasages of certain group
router.get('/group/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    } else if (req.params.id != undefined) {
        const tasks = await Task.find({
            "group_id": req.params.id
        }).populate({
            path: 'creator',
            model: User,
            select : 'email username color textColor'
        })
        .populate({
            path: 'asigned_to',
            model: User,
            select : 'email username color textColor'
        })  
        res.json(tasks);
    }
})

router.post('/send-task', async (req, res) => {
    var task = req.body.task;
    var group = req.body.group;
    var user = req.body.user;
    console.log(req.body)
    if (task.title && task.description && user && group) {
        task.creator = mongoose.Types.ObjectId(user._id);
        task.group_id = group;
        const taskBD = new Task(task);
        await taskBD.save();
        const socketTask = await taskBD
        .populate({
            path: 'creator',
            model: User,
            select : 'email username color textColor'
        })
        .populate({
            path: 'asigned_to',
            model: User,
            select : 'email username color textColor'
        })  
        Socket.sendMessage(req.body.group, 'task',socketTask);        
        sendNotificationByKey('documents', group, user._id)
        res.json({
            status: 'task sended'
        })
    } else {
        res.status(404);
        console.log("Error")
    }
})

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'task are updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'task Deleted'
    })
})

router.delete('/all/all/', async (req, res) => {
    await Task.deleteMany()
    return res.status(200).json({
        task: 'All task are deleted successfully'
    })
})

module.exports = router;