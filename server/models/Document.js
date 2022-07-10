var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var documentSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Document', documentSchema);