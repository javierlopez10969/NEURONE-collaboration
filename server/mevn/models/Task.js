const mongoose=require('mongoose');
const {Schema}= mongoose;

const Task = new Schema({
    title: String,
    description: String,
})

//modelo
module.exports = mongoose.model('Task',Task)