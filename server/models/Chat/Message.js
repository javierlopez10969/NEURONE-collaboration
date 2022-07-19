// Message.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {
    Schema
  } = mongoose;
// Message schema
let messageSchema = mongoose.Schema({
    //Description of the message
    message: {
        type: String,
        required: true
    },
    //User who send the message
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
var Message;

if (mongoose.models.Message) {
    Message = mongoose.model('Message');
} else {
    Message = mongoose.model('Message', messageSchema);
}
module.exports = Message;