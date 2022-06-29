const express = require('express'),
    router = express.Router(),
    Bookmark = require('../models/Bookmark'),
    Socket = require('../utils/socket');

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
            "group_id": req.params.id
        });
        res.json(bookmarks);
    }
})

router.post('/send-bookmark', async (req, res) => {
    var Bookmark = req.body.Bookmark;
    delete Bookmark.username.password;
    Bookmark.group_id = req.body.group;
    Socket.sendMessage(req.body.group, 'bookmark', Bookmark);
    //console.log(req.body.Bookmark)
    res.json({
        status: 'Bookmark sended'
    })
    const BookmarkBD = new Bookmark(Bookmark);
    await BookmarkBD.save();
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
        Bookmark: 'All Bookmark are deleted successfully'
    })
})

module.exports = router;