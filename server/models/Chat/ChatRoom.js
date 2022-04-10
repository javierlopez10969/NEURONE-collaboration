// Chat room
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
let chatRoomSchema = mongoose.Schema({
    //Description of the message
    name: {
        type: String,
        required: true
    },
    //User who are in the  room
    users: {
        type: Array
    },
    //Last 30 messages
    lastMessages: {
        type: Array
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

chatRoomSchema.plugin(uniqueValidator, {
    message: 'Error, esperaba {PATH} único.'
});
// Export
module.exports = mongoose.model('message', chatRoomSchema);