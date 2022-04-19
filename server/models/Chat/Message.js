// Message.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Message schema
let messageSchema = mongoose.Schema({
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
    room_id: {
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