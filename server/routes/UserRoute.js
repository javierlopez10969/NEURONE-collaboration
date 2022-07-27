//Importaciones
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// Modelo de usuario
const User = require('../models/User');
const {
    updateUser,
    deleteUser,
    getAll,
    getAllExceptOne,
    getAllExceptGroup,
    deleteAll

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
router.get('/', async (req, res) => {
    let token = req.headers.token; //token
    var _id;
    if (!token) {
        return res.status(401).json({
            error: 'You are not logged in'
        })
    }
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized'
        })
        _id = decoded.userId;

    })
    //token is valid
    user = await User.findOne({
        _id: _id
    }, {
        password: 0
    }, )
    return res.status(200).json({
        status: 'User grabbed successfully',
        user
    })
})

//TODO : Change password
//TODO : Auth on update user data
// Update user
router.post('/update-user/:id', updateUser)

//Delete all
router.delete('/all/', deleteAll)

//Get all
router.get('/all', getAll)

//Get all except of groupo of ids
router.post('/group', getAllExceptGroup);

//Get all user except the current user
router.get('/all/:id', getAllExceptOne)

// Delete by id
router.delete('/id/:id', deleteUser)

module.exports = router;