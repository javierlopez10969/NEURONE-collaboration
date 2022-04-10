// Message.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Message schema
let messageSchema = mongoose.Schema({
    //Description of the message
    description: {
        type: String,
        required: true
    },
    //User who send the message
    UserSender: {
        name: String,
        _id: String
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