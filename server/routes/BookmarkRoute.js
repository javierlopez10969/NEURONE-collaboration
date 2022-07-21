const express = require('express'),
    router = express.Router(),
    Bookmark = require('../models/Bookmark'),
    User = require('../models/User'),
    Group = require('../models/Group'),
    Socket = require('../utils/socket');
const mongoose = require('mongoose');

//Get all
router.get('/', async (req, res) => {
    const bookmarks = await Bookmark.find();
    res.json(bookmarks);
})

// GET all bookmarks of certain group
router.get('/group/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    } else if (req.params.id != undefined) {
        const bookmarks = await Bookmark.find({
            "group": mongoose.Types.ObjectId(req.params.id)
        }).populate({
            path: 'user',
            model: User
          }).populate({
            path: 'group',
            model: Group
          });
        res.json(bookmarks);
    }
})

router.post('/send-bookmark', async (req, res) => {
    var bookmark = req.body.bookmark;
    var group = req.body.group;
    if (bookmark && bookmark.user && group && bookmark.URL && bookmark.pageTitle) {
        bookmark.group =  mongoose.Types.ObjectId(group);
        Socket.sendMessage(group, 'bookmark', bookmark);
        res.json({
            status: 'Bookmark sended' + bookmark.URL
        })
        user = bookmark.user;
        bookmark.user =  mongoose.Types.ObjectId(bookmark.user._id);
        const BookmarkBD = new Bookmark(bookmark);
        await BookmarkBD.save();
    } else {
        return res.status(400).json({
            message: 'Put the required data'
        })
    }
})

router.put('/:id', async (req, res) => {
    await Bookmark.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Bookmark Updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Bookmark.findByIdAndRemove(req.params.id, req.body)
    res.json({
        status: 'Bookmark Deleted'
    })
})

router.delete('/all/all/', async (req, res) => {
    await Bookmark.deleteMany()
    return res.status(200).json({
        message: 'All Bookmark are deleted successfully'
    })
})

module.exports = router;