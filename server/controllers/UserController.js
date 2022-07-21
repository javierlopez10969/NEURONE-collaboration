//Models
const mongoose = require('mongoose');
const User = require('../models/User');
const Bookmark = require('../models/Bookmark');
const Document = require('../models/Document');
const Message = require('../models/Chat/Message');

const getUserInfo = (req, res) => {
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
                user: userDB,
                id: userDB.id,
                _id: decoded.userId
            })
        })
    })
}
const getAll = async (req, res) => {
    users = await User.find()
    return res.status(200).json({
        users
    })
}

const getAllExceptOne = async (req, res) => {
    const users = await User.find({
        '_id': {
            $ne: req.params.id
        }
    }, {
        'email': true
    })
    res.json(users);
}
const getAllExceptGroup = async (req, res) => {
    const actualUsers = req.body.actualUsers;
    const users = await User.find({
        _id: {
            $nin: actualUsers
        }
    });
    res.json(users);
}

const deleteAll = async (req, res) => {
    await User.deleteMany()
    return res.status(200).json({
        message: 'All user is deleted successfully'
    })
}

const deleteUser = async (req, res) => {
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