//Models
const mongoose = require('mongoose');
const User = require('../models/User');
const Bookmark = require('../models/Bookmark');
const Document = require('../models/Document');
const Message = require('../models/Chat/Message');
const Group = require('../models/Group');

const updateOtherFields = (id, user) => {
    //Update messages
    Message.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
    }, {
        "$set": {
            "user.name": user.name,
            "user.color": user.color,
            "user.lastName": user.lastName,
            "user.textColor": user.textColor
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Messages updated!");
        }
    });
    //Update documents
    Document.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
        "user._id": id.toString(),
    }, {
        "$set": {
            "user": user
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Documents updated");
        }
    });
    //Update documents
    Bookmark.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
        "user._id": id.toString(),
    }, {
        "$set": {
            "user": user
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Bookmarks updated");
        }
    });
}

module.exports = {
    updateOtherFields
}