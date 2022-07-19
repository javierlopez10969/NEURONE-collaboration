const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const Task = new Schema({
    title:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    state:  {
        type: String,
        required: true
    },
    state:  {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    group_id: {
        type: String
    }
})

//modelo
module.exports = mongoose.model('Task', Task)