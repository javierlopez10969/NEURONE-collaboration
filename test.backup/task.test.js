const app = require('../../server')
const dotenv = require("dotenv");
dotenv.config();
const expect = require('chai').expect;
const request = require('supertest');

let tempToken;

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
});

var email = process.env.USER_TEST;
var password = process.env.PASSWORD_TEST;
var idUser = "";
var user = {};
