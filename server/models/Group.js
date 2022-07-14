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
        type: Object,
        default: {
            chat: {
                icon: "mdi-chat",
                title: "Group Chat",
                active: true,
            },
            activity: {
                icon: "mdi-chart-box",
                title: "Activity",
                active: true,
            },
            bookmarks: {
                icon: "mdi-star-outline",
                title: "Bookmarks",
                active: true,
            },
            snippets: {
                icon: "mdi-file",
                title: "snippets",
                active: true,
            },
            documents: {
                icon: "mdi-file-document",
                title: "Documents",
                active: true,
            },
            people: {
                icon: "mdi-account-group-outline",
                title: "People",
                active: true,
            },
            feed: {
                icon: "mdi-cog",
                title: "Feed",
                active: true,
            },
            tasks: {
                icon: "mdi-cog",
                title: "Tasks",
                active: true,
            },
            settings: {
                icon: "mdi-cog",
                title: "Settings",
                active: true,
            },

        }
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