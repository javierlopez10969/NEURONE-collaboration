// Document.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {
  Schema
} = mongoose;
// Document schema
let DocumentSchema = mongoose.Schema({
    //User who upload the file
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    //Group of the document
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
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
});

// Export
var Document;

if (mongoose.models.Document) {
    Document = mongoose.model('Document');
} else {
    Document = mongoose.model('Document', DocumentSchema);
}
module.exports = Document;