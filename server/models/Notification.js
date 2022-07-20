//Group Model
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {
    Schema
} = mongoose;
// Setup schema
//For each group,exists a notification  system for each user in the group
let notificationSchema = mongoose.Schema({
    //User who pertains the notification system
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    //Group notification system
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    //Total of the notifications
    total: {
        type: Number,
        default: 0
    },
    //Modules and its notifications
    modules: {
        type: Object,
        default: {
            chat: {
                total: 0,
            },
            bookmarks: {
                total: 0,
            },
            documents: {
                total: 0,
            },
            tasks: {
                total: 0,
            },
            feed: {
                total: 0,
            },
            snippets: {
                total: 0,
            },
            activity: {
                total: 0,
            },
            people: {
                total: 0,
            },
            settings: {
                total: 0,
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
notificationSchema.plugin(uniqueValidator, {
    message: 'Error, esperaba {PATH} único.'
});
// Export
module.exports = mongoose.model('Notification', notificationSchema);