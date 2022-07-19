//Importaciones
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// Modelo de usuario
const User = require('../models/User');
const {
    updateOtherFields
} = require('../controllers/UserController');
//Routes + Controllers
router.post('/register', async (req, res, next) => {
    if (req.body.email == "" || req.body.password == "" ||
        req.body.email == undefined || req.body.password == undefined) {
        return res.status(400).json({
            error: 'Please enter all required fields'
        });
    }
    //Verify if user exists
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (!err) {
            if (!user) {
                console.log("Dont found")
                const newUser = new User(req.body)
                const password = bcrypt.hashSync(req.body.password, 10)
                newUser.password = password
                User.create(newUser, (error, user) => {
                    if (error) {
                        return next(error)
                    }
                    return res.status(201).json({
                        message: 'User is registered successfully',
                        user: user
                    })
                })
            } else {
                return res.status(400).json({
                    title: 'User already exist',
                    error: 'User already exist'
                })
            }
        } else {
            console.log('error findOne : ' + err.message);
            return res.status(400).json({
                title: 'Error has ocurred',
                error: 'Error has ocurred'
            })
        }
    })
})
router.post('/login', async (req, res, next) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        console.log('Trying to log')
        if (err) {
            console.log('serve error');
            return res.status(500).json({
                title: 'server error',
                error: err
            })
        }
        if (!user) {
            console.log('User dont found');
            return res.status(401).json({
                error: 'invalid credentials'
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            console.log('wrong password');
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials'
            })
        }
        //IF ALL IS GOOD create a token and send to frontend
        let token = jwt.sign({
            userId: user._id
        }, 'secretkey');
        console.log('Login succes');
        return res.status(200).json({
            status: 'Login successfully',
            token: token,
            user: user
        })
    })
})
//GET User info
router.route('/').get((req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })
        //token is valid
        User.findOne({
            _id: decoded.userId
        }, (err, user) => {
            if (err) return console.log(err)
            return res.status(200).json({
                status: 'User grabbed successfully',
                user
            })
        })
    })
})

//TODO : Change password
//TODO : Auth on update user data
// Update user
router.route('/update-user/:id').post((req, res) => {
    const userU = req.body.user;
    const id = userU._id;
    delete userU._id;
    User.findByIdAndUpdate(req.params.id, userU,
        (error, user) => {
            if (error) {
                return res.status(400);
            } else {
                updateOtherFields(id, userU);
                res.status(200).json(userU);
                console.log('user successfully updated!');
            }
        })
})

//Delete all
router.delete('/all/', async (req, res) => {
    await User.deleteMany()
    return res.status(200).json({
        message: 'All user is deleted successfully'
    })
})
router.get('/all', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

router.post('/group', async (req, res) => {
    const actualUsers = req.body.actualUsers;
    const users = await User.find({ _id: { $nin:actualUsers } });
    res.json(users);
})
//Get all user except the current user
router.get('/all/:id', async (req, res) => {
    const users = await User.find({'_id': {$ne: req.params.id}},{'email':true})
    res.json(users);
})

// Delete by id
router.delete('/id/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body, )
    res.status(200).json({
        status: 'User Deleted'
    })
})

module.exports = router;