const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
})


router.post('/register/', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    await user.save();
    res.json(req.body);
})

router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'User Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'User Deleted'
    })
})

module.exports = router;