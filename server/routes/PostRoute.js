const express = require('express'),
    router = express.Router(),
    Post = require('../models/Post'),
    Socket = require('../utils/socket');

    const mongoose = require('mongoose');

    const {sendNotificationByKey} = require('../controllers/NotificationController')
//Get all
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
})

// GET all posts of certain group
router.get('/group/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    } else if (req.params.id != undefined) {
        const posts = await Post.find({
            "group_id": req.params.id
        });
        res.json(posts);
    }
})

router.post('/post', async (req, res) => {
    var post = req.body.post;
    delete post.username.password;
    post.group_id = req.body.group;
    Socket.sendMessage(req.body.group, 'post', post);
    console.log(req.body.post)
    const postBD = new Post(post);
    await postBD.save();
    res.json({
        status: 'post sended'
    })

})

router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'post Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'post Deleted'
    })
})

router.delete('/all/all/', async (req, res) => {
    await Post.deleteMany()
    return res.status(200).json({
        post: 'All post are deleted successfully'
    })
})

module.exports = router;