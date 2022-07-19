//Models
const mongoose = require('mongoose');
const User = require('../models/User');
const Bookmark = require('../models/Bookmark');
const Document = require('../models/Document');
const Message = require('../models/Chat/Message');
const Group = require('../models/Group');

const getUserInfo =  (req, res) =>  {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })
        //token is valid
        User.findOne({
            _id: decoded.userId
        }, (err, userDB) => {
            if (err) return console.log(err)
            return res.status(200).json({
                status: 'User grabbed successfully',
                user : userDB,
                id : userDB.id,
                _id : decoded.userId
            })
        })
    })
}

const updateOtherFields = async (id, user) => {
    //Update messages
    Message.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
    }, {
        "$set": {
            "user.names": user.name,
            "user.color": user.color,
            "user.last_names": user.lastName,
            "user.textColor": user.textColor,
            "user.username" : user.username,
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Messages updated!");
        }
    });
    //Update documents
    Document.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
        "user._id": id.toString(),
    }, {
        "$set": {
            "user": user
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Documents updated");
        }
    });
    //Update documents
    Bookmark.updateMany({
        "user._id": mongoose.Types.ObjectId(id),
        "user._id": id.toString(),
    }, {
        "$set": {
            "user": user
        }
    }, (error, messages) => {
        if (error) {
            console.log(error);
        } else {
            console.log(messages);
            console.log("Bookmarks updated");
        }
    });
}
const getAll = async (req, res) => {
    users = await User.find()
    return res.status(200).json({users
    })
}

const getAllExceptOne = async (req, res) => {
    const users = await User.find({'_id': {$ne: req.params.id}},{'email':true})
    res.json(users);
}
const getAllExceptGroup = async (req, res) => {
    const actualUsers = req.body.actualUsers;
    const users = await User.find({ _id: { $nin:actualUsers } });
    res.json(users);
}

const deleteAll = async (req, res) => {
    await User.deleteMany()
    return res.status(200).json({
        message: 'All user is deleted successfully'
    })
}

const deleteUser =  async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body, )
    res.status(200).json({
        status: 'User Deleted'
    })
}

const updateUser = async (req, res) => {
    const userU = req.body.user;
    const id = userU._id;
    delete userU._id;
    await User.findByIdAndUpdate(req.params.id, userU)
    updateOtherFields(id, userU);
    res.status(200).json(userU);
    console.log('user successfully updated!');
}

module.exports = {
    getUserInfo,
    updateUser,
    deleteUser,
    getAll,
    getAllExceptOne,
    getAllExceptGroup,
    deleteAll
}