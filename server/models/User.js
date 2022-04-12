const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
    values: ['ADMIN', 'USER', 'Cliente', 'Especialista'],
    message: '{VALUE} no es un rol válido'
}

// Setup schema
let userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    color: {
        type: String,
        default: "#5123C1FF"
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    phone: String,
    groups: {
        type: Array,
        default: []
    },

    role: {
        type: String,
        default: 'USER',
        enum: roles
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