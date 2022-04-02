//Importations
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//Faker
const faker = require('faker');
//User Model
const User = require('../models/User');


//Routes + Controller
//GET all user
router.get('/users/', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

router.post('/register/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
})

//Register
router.post('/register/'), async (req, res, next) => {
    console.log('Api / register')
    console.log('EMAIL', req)
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        role: req.body.role,
        groups: []
    })
    //We get the data of the email and password
    const email = req.body.email
    const password = newUser.pass
    var exist = true
    User.findOne({
        email
    }, function (err, user) {
        if (!err) {
            if (!user) {
                exist = false
                console.log("User doesn't exist")
            } else {
                exist = true;
                console.log('User exist')
                return res.status(400).json({
                    title: 'Email is invalid or already taken',
                    error: 'Email is invalid or already taken'
                })
            }
        } else {
            return next(error)
            console.log('error findOne : ' + err.message);
        }
    })

    await User.create(newUser, (error, data) => {
        if (error) {
            return next(error)
        }
        if (exist == false) {
            console.log('User register' + data._id)
            res.json(data)
        }
    })
}

router.route('/login').post((req, res, next) => {
    console.log('correo : ' + req.body.email)
    console.log('body req : ' + req.body.email + ' password :' + req.body.pass)
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        console.log('intentado loguear')
        if (err) {
            console.log('serve errror');
            return res.status(500).json({
                title: 'server error',
                error: err
            })
        }

        if (!user) {
            console.log('usuario no encontrado');
            return res.status(401).json({
                title: 'user not found',
                error: 'invalid credentials'
            })
        }
        if (!bcrypt.compareSync(req.body.pass, user.pass)) {
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
            token: token
        })

    })
})
//Obtener usuario grabbing user info
router.route('/user').get((req, res, next) => {
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

// Update user
router.route('/update-user/:id').post((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('user successfully updated!');
            console.log('Name user : ' + req.body.name + ' New user id proyecto : ' + req.body.idProyecto + ' id usuario' + req.body._id)
        }
    })
})

// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
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


module.exports = router;