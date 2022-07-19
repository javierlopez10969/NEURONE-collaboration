const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
    values: ['admin', 'student','user'],
    message: '{VALUE} no es un rol válido'
}

// Setup schema
let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type : String
    },
    names: {
        type: String
    },
    last_names: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "#5123C1FF"
    },
    textColor: {
        type: String,
        default: "#FFFFF"
    },
    password: {
        type: String,
        required: [true, 'Password is required']
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
userSchema.plugin(uniqueValidator, {
    message: 'Error, esperaba {PATH} único.'
});
// Export
module.exports = mongoose.model('User', userSchema);