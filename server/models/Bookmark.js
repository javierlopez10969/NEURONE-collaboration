// Bookmark.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Bookmark schema
let bookmarkSchema = mongoose.Schema({
    //Description of the message
    message: {
        type: String,
        required: true
    },
    //User who send the message
    username: {
        type: Object,
        required: true
    },
    //Type of message
    //Private message
    //Group message
    message_type: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: String
    }
});

// Export
var Bookmark;

if (mongoose.models.Bookmark) {
    Bookmark = mongoose.model('Bookmark');
} else {
    Bookmark = mongoose.model('Bookmark', bookmarkSchema);
}
module.exports = Bookmark;