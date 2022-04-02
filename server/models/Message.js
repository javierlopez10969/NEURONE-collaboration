// Message.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
let messageSchema = mongoose.Schema({
    //Description of the message
    description: {
        type: String,
        required: true
    },
    //User who send the message
    UserSender: {
        id: string,
        name: String,

    },
    //Type of message
    //Private message
    //Group message
    type_message: {
        type: string
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

messageSchema.plugin(uniqueValidator, {
    message: 'Error, esperaba {PATH} único.'
});
// Export
module.exports = mongoose.model('message', messageSchema);