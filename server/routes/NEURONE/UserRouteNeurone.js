const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const apiRoute = process.env.NEURONE_ROUTE.toString();
const superagent = require('superagent');
const User = require('../../models/User');
const {
    updateUser,
    deleteUser,
    getAll,
    getAllExceptOne,
    getAllExceptGroup,
    deleteAll
} = require('../../controllers/UserController');
//GET User info
router.get('/', async (req, res, next) => {
    let token = req.headers.token; //token
    let authToken = req.header('auth_token'); //token
    var userNeurone = {};
    var user = {};
    const userReq = JSON.parse(req.headers.user)
    var id = userReq._id;
    if (token === undefined || authToken === undefined) {
        return res.status(401).send({
            error: 'No keys provided'
        });
    }
    let url = apiRoute + "/api/user/" + id;
    console.log(url);
    superagent
        .get(url)
        .set('x-access-token', authToken) // set the token as a header
        .end((err, response) => {
            // Calling the end function will send the request
            console.log(response.status);
            if (response.status == 200) {
                userNeurone = response.body.user;
                console.log(userNeurone);
                User.findOne({
                    email: response.body.user.email
                }, (err, userDB) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(userNeurone);
                        if (token === authToken) {
                            let token = jwt.sign({
                                userId: user._id
                            }, 'secretkey');
                        }
                        return res.status(200).json({
                            userNeurone,
                            user: userDB,
                            token: token
                        });
                    }
                })

            } else {
                return res.status(400).json({
                    message: res.status
                });
            }
        });
})
//GET User info
router.post('/update-users/', async (req, res, next) => {
    let authToken = req.body.headers.token; //token
    let url = apiRoute + "/api/user/";
    superagent
        .get(url)
        .set('x-access-token', authToken) // set the token as a header
        .end((err, response) => {
            // Calling the end function will send the request
            console.log(response.status);
            if (response.status == 200) {
                users = response.body.users;
                users.forEach(element => {
                    var email = element.email;
                    User.findOne({
                        email: email
                    }, function (err, user) {
                        if (err) {
                            console.log(err);
                        }
                        if (!user) {
                            var newUser = new User(element);
                            newUser.password = bcrypt.hashSync(element.email, 10);
                            newUser.role = element.role.name;
                            User.create(newUser, (error, user) => {
                                if (error) {
                                    return next(error)
                                } else {
                                    console.log(user);
                                }
                            })
                        }
                    });
                });
                return res.status(200).json(response.body);
            } else {
                return res.status(400).json({
                    message: 'Invalid token'
                });
            }
        });
})

//TODO : Change password
//TODO : Auth on update user data
// Update user
router.post('/update-user/:id', updateUser)

//Delete all
router.delete('/all/', deleteAll)

//Get all
router.get('/all', getAll)

//Get all users except certain user in group of ids
router.post('/group', getAllExceptGroup);

//Get all user except the current user
router.get('/all/:id', getAllExceptOne)

// Delete by id
router.delete('/id/:id', deleteUser)
module.exports = router;