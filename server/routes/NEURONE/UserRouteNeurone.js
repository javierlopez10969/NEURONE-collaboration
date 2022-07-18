const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const apiRoute = process.env.NEURONE_ROUTE.toString();
const superagent = require('superagent');
const User = require('../../models/User');

//GET User info
router.get('/', async (req, res, next) => {
    let token = req.headers.token; //token
    let authToken = req.header('auth_token'); //token
    const id = req.body._id;
    var userNeurone;
    var user = {};
    if (token === undefined || authToken === undefined || id === undefined) {
        return res.status(401).send({
            error: 'No token provided'
        });
    }
    let url = apiRoute + "/api/user/" +id;
    superagent
        .get(url)
        .set('x-access-token', authToken) // set the token as a header
        .end((err, response) => {
            // Calling the end function will send the request
            console.log(response.status);
            if (response.status == 200) {
                userNeurone = response.body.user;
                const email = userNeurone.email;
                User.findOne({ email: email }, (err, userDB) => { 
                    if (err) {
                        console.log(err);
                    }else{
                        user = userDB   
                        console.log(userNeurone);
                        return res.status(200).json({ userNeurone,user});
                    }})
            } else {
                return res.status(400).json({
                    message: res.status
                });
            }
    });
})

//GET User info
router.post('/update-users/', async (req, res, next) => {
    let authToken = req.header('auth_token'); //token
    let usersNeurone;
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
                var email= element.email;
                User.findOne({email: email},function (err, user) {
                    if (err) {
                        console.log(err);
                    }
                    if(!user) {  
                        var newUser =  new User(element);
                        newUser.password = bcrypt.hashSync(element.email, 10);
                        User.create(newUser, (error, user) => {
                            if (error) {
                                return next(error)
                            }else{
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
module.exports = router;