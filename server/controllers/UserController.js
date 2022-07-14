//Models

const User = require('../models/User');
const Bookmark = require('../models/Bookmark');
const Document = require('../models/Document');
const Message = require('../models/Chat/Message');
const Group = require('../models/Group');

const updateOtherFields = (id, user) => {
    //Update messages
    Message.updateMany({
        "user._id": id,
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
            console.log("Messages updated");
        }
    });
    //Update documents
    Document.updateMany({
        "user._id": id,
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
            console.log("Messages updated");
        }
    });
    //Update documents
    Bookmark.updateMany({
        "user._id": id,
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
            console.log("Messages updated");
        }
    });
}

module.exports = {
    updateOtherFields
}