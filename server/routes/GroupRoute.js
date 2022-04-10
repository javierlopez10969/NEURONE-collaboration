const express = require('express');
const router = express.Router();

const Group = require('../models/Group')

router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
})


router.post('/', async (req, res) => {
    const group = new Group(req.body);
    await group.save();
    res.json('Audio procesado');
})

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

module.exports = router;