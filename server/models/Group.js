//Group Model
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
let groupSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Group"
    },
    color: {
        type: String,
        default: "#5123C1FF"
    },
    //ID of users
    users: {
        type: Array
    },
    usersAdmin: {
        type: Array
    },
    usersAdmin: {
        type: Array
    },
    created_by: {
        type: String,
    },
    description: {
        type: String,
    },
    chatRooms: {
        type: Array,
        default: [],
    },
    posts: {
        type: Array,
        default: [],
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Validator
groupSchema.plugin(uniqueValidator, {
    message: 'Error, esperaba {PATH} único.'
});
// Export
module.exports = mongoose.model('Group', groupSchema);