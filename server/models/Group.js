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
    textColor: {
        type: String,
        default: "#FFFFFFFF"
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
    chatRoom: {
        type: Array,
        default: [],
    },
    posts: {
        type: Array,
        default: [],
    },
    //Modules are the tools availible for the group
    modules: {
        type: Array,
        default: [{
            icon: "mdi-chat",
            title: "Group Chat",
            active: true,
        }, {
            icon: "mdi-chart-box",
            title: "Activity",
            active: true,
        }, {
            icon: "mdi-star-outline",
            title: "Bookmarks",
            active: true,
        }, {
            icon: "mdi-file",
            title: "snippets",
            active: true,
        }, {
            icon: "mdi-file-document",
            title: "Documents",
            active: true,
        }, {
            icon: "mdi-account-group-outline",
            title: "People",
            active: true,
        }, {
            icon: "mdi-cog",
            title: "Settings",
            active: true,
        }]
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