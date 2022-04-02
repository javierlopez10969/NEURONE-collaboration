// User.js
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} no es un rol válido'
}

// Setup schema
let userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    name: {
        type: String,
        required: [true, 'Name ']
    },
    lastName: {
        type: String,
        required: [true, 'Name ']
    },
    password: {
        type: String,
        required: [true, 'Password is neccecsary'],
    },
    phone: String,
    role: {
        type: String,
        default: 'USER',
        enum: roles
    },
    activo: {
        type: Boolean,
        default: true
    },
    groups: {
        type: Array
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