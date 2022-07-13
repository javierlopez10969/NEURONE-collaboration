const Socket = require('../utils/socket'),
    Document = require('../models/Document'),
    User = require('../models/User'),
    mongoose = require('mongoose')
let mongoURI;
if (process.env.NODE_ENV === 'testing') {
    mongoURI = process.env.MONGODB_URI_TEST;
}
if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGODB_URI_PROD;
}
if (process.env.NODE_ENV === 'development') {
    mongoURI = process.env.MONGODB_URI_DEV;
}

const conn = mongoose.createConnection(mongoURI);
const saveDocumentDB = async function (group, file, user_id) {
    userDB = await User.findOne({
        _id: user_id
    })
    if (userDB) {
        let document = new Document({
            username: userDB,
            realfilename: file.originalname,
            filename: file.filename,
            group_id: group
        })
        delete document.username.password;
        document.save()
        Socket.sendMessage(group, 'document', document);
        return document;
    }
}
const findDocumentsByGroup = (req, res) => {

    Document.find({
        group_id: req.params.id
    }, (err, documents) => {
        if (err) {
            return console.log(err)
        } else {
            res.json(documents)
        }
    });


}


module.exports = {
    saveDocumentDB,
    findDocumentsByGroup
}