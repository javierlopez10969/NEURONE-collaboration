//Models
const mongoose = require('mongoose');
const User = require('../models/User');
const Notification = require('../models/Notification');
const Group = require('../models/Group');
const Socket = require('../utils/socket')
const getAll = async (req, res) => {
    const notifications = await Notification.find()
    return res.status(200).json({
        notifications
    })
}
const getNotification = async (req, res) => {
    const notification = await Notification.findOne({
        '_id': req.params.id
    })
    return res.status(200).json({
        notification
    })
}

const createNotification = async (req, res) => {
    var user = req.body.user;
    var group = req.body.group;
    if (!user || !group) {
        return res.status(400).json({
            message: 'User and Group are required'
        })
    }
    if (user && group) {
        var notification = new Notification({
            user: user,
            group: group
        });
        const notificationBD = await Notification.findOne({
            group: group,
            user: user
        });
        if (notificationBD) {
            return res.json({
                status: 'Already exists notification system for user in group ',
            })
        }
        await notification.save();
        return res.json({
            status: 'Notification system created'
        })
    }
    return res.status(404);
}

const getByUser = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({
            message: 'User id is required'
        })
    }
    const size = Buffer.byteLength(id, "utf-8");
    if (size < 12) {
        return res.status(400).json({
            "message": "Incorrect id"
        });
    }
    console.log('Size : ' + size);
    const notifications = await Notification.find({
        user: mongoose.Types.ObjectId(id)
    })
    const calcTotal = await Notification.aggregate([{
            $match: {
                user: mongoose.Types.ObjectId(id)
            }
        },
        {
            $group: {
                _id: '$user',
                total: {
                    $sum: '$total'
                }
            }
        }
    ])
    var total = 0;
    if (calcTotal.length != 0) {
        total = calcTotal[0].total;
    }
    return res.json({
        total,
        notifications,
    });
}
const sendNotificationByKey = async (key, groupID, user) => {
    console.log('Key : ' + key);
    console.log('Group : ' + groupID);
    console.log('User : ' + user);
    group = await Group.findOne({
        _id: groupID
    }, {
        users: 1
    });
    for (let index = 0; index < group.users.length; index++) {
        const element = group.users[index];
        if (element._id != user) {
            const notification = await Notification.findOne({
                group: mongoose.Types.ObjectId(group._id),
                user: mongoose.Types.ObjectId(element._id),
            })
            if (notification) {
                notification.total++;
                notification.modules[key].total++;
                await Notification.findOneAndUpdate({
                    _id: notification._id
                }, notification);
                Socket.sendMessage(group, 'notification', 'new ' + key);
            }
        }
    }
}
const deleteAll = async (req, res) => {
    await Notification.deleteMany()
    return res.status(200).json({
        message: 'All notifications are deleted successfully'
    })
}
const deleteNotification = async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body, )
    res.status(200).json({
        status: 'User Deleted'
    })
}
const updateNotification = async (req, res) => {
    const notificationU = req.body;
    await Notification.findByIdAndUpdate(req.params.id, notificationU)
    res.status(200).json(notificationU);
    Socket.sendMessage(req.body.group, 'notification', 'clear ' + 'message');
    console.log('Notification successfully updated!');
}

module.exports = {
    createNotification,
    getNotification,
    getByUser,
    updateNotification,
    deleteNotification,
    getAll,
    deleteAll,
    sendNotificationByKey

}