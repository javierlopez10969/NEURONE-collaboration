const Socket = require('../utils/socket'),
    Document = require('../models/Document'),
    User = require('../models/User'),
    mongoose = require('mongoose')
const {sendNotificationByKey} = require('./NotificationController')
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
    },{password : 0})
    if (userDB) {
        let document = new Document({
            user:  mongoose.Types.ObjectId(user_id),
            realfilename: file.originalname,
            filename: file.filename,
            group: mongoose.Types.ObjectId(group)
        })
        document.save()
        sendNotificationByKey('documents', group, userDB._id)
        Socket.sendMessage(group, 'document', document);
        Socket.sendMessage(group, 'notification', 'newDocument');
        return document;
    }
}
const findDocumentsByGroup = (req, res) => {
    Document.find({
        group: mongoose.Types.ObjectId(req.params.id)
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