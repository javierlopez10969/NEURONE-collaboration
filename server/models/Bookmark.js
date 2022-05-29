// Bookmark.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
        required: true
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