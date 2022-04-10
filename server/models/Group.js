//Group Model
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Setup schema
let groupSchema = mongoose.Schema({
    title: {
        type: String,
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
    created_by: {
        type: String
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