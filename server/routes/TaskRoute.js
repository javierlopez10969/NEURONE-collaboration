const express = require('express');
const router = express.Router();

const Task = require('../models/Task')

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})


router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json('Audio procesado');
})

router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Task Updated'
    })
})

router.delete('/all', async (req, res) => {
    await Task.deleteMany({})
    res.json({
        status: 'All Task Deleted'
    })
})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'Task Deleted'
    })
})



module.exports = router;