const express = require('express');
const router = express.Router();

const Group = require('../models/Group')
const User = require('../models/User')
const jwt = require('jsonwebtoken');

//Create Group
router.post('/', async (req, res) => {
    console.log("Name group : " + req.body.group.name.length);
    if (req.body.group.name != undefined  &&
        req.body.group.name != "" && req.body.user) {
        userCreator = req.body.user;
        const group = new Group(req.body.group)
        group.users.push(userCreator);
        await group.save();
        return res.status(201).json({
            group: group
        });
    } else {
        return res.status(400).json({
            status: "Bad Request"
        });
    }
})

// GET all groups
router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
})

// GET all groups of certain user
router.get('/user/:id', async (req, res) => {
    //let token = req.headers.token; //token
    var user;
    user = await User.findOne({
        _id: req.params.id
    });
    if (user) {
        const groups = await Group.find({
            "groups": user
        });
        return res.json(groups);
    }
})
router.get('/:id', async (req, res) => {
    var group = await Group.findById(req.params.id)
    res.json({
        group
    })
})

//Update
router.put('/:id', async (req, res) => {
    await Group.findByIdAndUpdate(req.params.id, req.body.group)
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
        message: 'All groups are deleted successfully'
    })
})

module.exports = router;