// Document.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Document schema
let DocumentSchema = mongoose.Schema({
    //User who upload the file
    username: {
        type: Object,
        required: true
    },
    realfilename: {
        type: String,
        required: true
    },
    filename: {
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
var Document;

if (mongoose.models.Document) {
    Document = mongoose.model('Document');
} else {
    Document = mongoose.model('Document', DocumentSchema);
}
module.exports = Document;