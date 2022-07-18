const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const apiRoute = process.env.NEURONE_ROUTE.toString();
const mongoURI = process.env.MONGO_URI_NEURONE
const conn = mongoose.createConnection(mongoURI);
const superagent = require('superagent');
var db;
conn.once('open', () => {
    db = conn.db;
    console.log('apiRoute: ' + apiRoute);
    // Add this line in the code
    conn.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log(err);
        } else {
            names.forEach(function (e, i, a) {
                //console.log(e.name);
            });
        }
    });
});
//GET User info
router.get('/', async (req, res, next) => {
    let token = req.headers.token; //token
    let authToken = req.header('auth_token'); //token
    let id = req.body._id;
    let userNeurone;
    let user;
    let url = apiRoute + "/user/";
    if (token && authToken) {
        superagent
            .get(apiRoute + "/api/user/" + id)
            .set('x-access-token', authToken) // set the token as a header
            .end((err, response) => {
                // Calling the end function will send the request
                console.log(response.status);
                if (response.status == 200) {
                    return res.status(200).json(response.body);
                } else {
                    return res.status(400).json({
                        message: 'Invalid token'
                    });
                }
            });
    }
})

//GET User info
router.get('/update-user/', async (req, res, next) => {
    let token = req.headers.token; //token
    let authToken = req.header('auth_token'); //token
    let id = req.body._id;
    let userNeurone;
    let user;
    let url = apiRoute + "/user/";
    if (token && authToken) {
        superagent
            .get(apiRoute + "/api/user/" + id)
            .set('x-access-token', authToken) // set the token as a header
            .end((err, response) => {
                // Calling the end function will send the request
                console.log(response.status);
                if (response.status == 200) {
                    return res.status(200).json(response.body);
                } else {
                    return res.status(400).json({
                        message: 'Invalid token'
                    });
                }
            });
    }
})
module.exports = router;