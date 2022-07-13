//Importaciones
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//Faker
const faker = require('faker');
// Modelo de usuario
const User = require('../models/User');
const Bookmark = require('../models/Bookmark');
const Document = require('../models/Document');
const Message = require('../models/Chat/Message');
const Group = require('../models/Group');


//Routes + Controllers

router.post('/register', async (req, res, next) => {
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
                        message: 'User registred successfully',
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
            title: 'login sucess',
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
                title: 'user grabbed',
                user
            })
        })

    })
})


router.route('/edit-user/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//TODO : Change password
//TODO : Auth on update user data
// Update user
router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'User Updated'
    })
})
router.route('/update-user/:id').post((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body.user,
        (error, user) => {
            if (error) {
                return next(error);
            } else {
                Message.updateMany({
                    "username._id": req.params.id,
                    "username._id": req.params.id.toString(),
                }, {
                    "$set": {
                        "user": req.body.user
                    }
                }, (error, messages) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(messages);
                        console.log("Messages updated");
                    }
                });
                res.json(user)
                console.log('user successfully updated!');
            }
        })
})


//Faker usuario
router.get('/faker-user', (req, res) => {
    console.log("Ruta de fakers");
    for (let i = 0; i < 100; i++) {
        User.create({
            name: faker.name.findName(),
            username: faker.name.findName(),
            nameEmpresa: faker.company.companyName(),
            pass: faker.internet.password(),
            email: faker.internet.email(),
            role: faker.random.arrayElement(['Cliente', 'Especialista']),
            especialidad: faker.name.jobTitle(),
            phone: faker.phone.phoneNumber(),
            idProyecto: ''
        })
    }
    res.send('Creando 100 usuarios faker');
});

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


router.get('/all/:id', async (req, res) => {
    const users = await User.find({
        '_id': {
            $ne: req.params.id
        }
    });
    res.json(users);
})

// Delete by id
router.delete('/id/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id, req.body)
    res.status(200).json({
        status: 'User Deleted'
    })
})

module.exports = router;