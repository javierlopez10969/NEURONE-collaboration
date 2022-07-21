// Message.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {
    Schema
  } = mongoose;
// Message schema
let messageSchema = mongoose.Schema({
    //Description of the message
    description: {
        type: String,
        required: true
    },
    //User who send the message
    user: {
        type: Object,
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
var Message;

if (mongoose.models.Message) {
    Message = mongoose.model('Message');
} else {
    Message = mongoose.model('Message', messageSchema);
}
module.exports = Message;