const express = require('express'),
    router = express.Router(),
    Group = require('../models/Group'),
    Bookmark = require('../models/Bookmark'),

    Post = require('../models/Post'),
    Message = require('../models/Chat/Message'),
    Socket = require('../utils/socket');

//Get all
router.get('/:id', async (req, res) => {
    if (req.params.id === undefined) {
        console.log("UNDEFINED")
    } else if (req.params.id != undefined) {
        const group = await Group.findById(req.params.id);
        if (group) {
            var stats = {}
            stats.users = group.users.length;
            stats.bookmarks = await Bookmark.find({
                "group_id": req.params.id
            }).count();
            stats.messages = await Message.find({
                "group_id": req.params.id
            }).count();
            res.json(stats);
        } else {
            res.json({
                status: 'Group not found'
            })
        }

    }
})
module.exports = router;