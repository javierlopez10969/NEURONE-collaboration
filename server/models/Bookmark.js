// Bookmark.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {
    Schema
  } = mongoose;
// Bookmark schema
let bookmarkSchema = mongoose.Schema({
    //URL
    URL: {
        type: String,
        required: true
    },
    //URL
    pageTitle: {
        type: String,
        required: true
    },
    //Notes
    notes: {
        type: String,
    },
    //User who made the bookmark
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
        //User who send the message
        group: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
            required: true
        },
    created_at: {
        type: Date,
        default: Date.now
    },
});

// Export
var Bookmark;

if (mongoose.models.Bookmark) {
    Bookmark = mongoose.model('Bookmark');
} else {
    Bookmark = mongoose.model('Bookmark', bookmarkSchema);
}
module.exports = Bookmark;