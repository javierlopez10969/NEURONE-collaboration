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
    asigned_to:  {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  
    //User who made the task
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    group_id: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },

})

//modelo
module.exports = mongoose.model('Task', Task)