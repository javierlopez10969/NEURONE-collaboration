const express = require('express');
const router = express.Router();

const Group = require('../models/Group')
const User = require('../models/User')
const jwt = require('jsonwebtoken');

// GET all groups
router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
})

// GET all groups of certain user
router.get('/user/:id', async (req, res) => {
    let token = req.headers.token; //token
    var user;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })
        //token is valid
        user = User.findOne({
            _id: decoded.userId
        })
    })
    if (user) {
        const groups = await Group.find({
            "groups": user
        });
        return res.json(groups);
    }
})
// GET all ID groups of certain user
router.get('/user/id/:id', async (req, res) => {
    if (req.params.id != undefined) {

        user = await User.findById(req.params.id);
        const groups = await Group.find({
            "groups": user
        }, {
            _id: 1
        });
        res.json(groups);
    }
})
//Create Group
router.post('/', async (req, res) => {
    console.log("Name group : " + req.body.group.name.length);
    if (req.body.group.name != undefined && req.body.group.description != undefined &&
        req.body.group.name != "" && req.body.user) {
        userCreator = req.body.user;
        const group = new Group(req.body.group)
        group.users.push(userCreator)
        //Update each user in the group
        /*
        group.users.forEach(user => {
            newUser = user.groups.push(group._id);
            User.findAndUpdate(newUser);
        })*/
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