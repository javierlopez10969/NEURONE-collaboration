const app = require('../../server')

const User = require("../../../server/models/User");
const dotenv = require("dotenv");
dotenv.config();
let chai = require('chai');
const expect = require('chai').expect;
const request = require('supertest');

var idUser = "";

let tempToken;

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
});

describe("CRUD and auth of users", () => {
    it("Should register the new user ", (done) => {
        request(app)
            .post("/api/user/register")
            .send({
                'email': process.env.USER_TEST,
                'password': process.env.PASSWORD_TEST
            })
            .expect(201)
            .then((res) => {
                idUser = res.body.user._id;
                done();
            })
            .catch((err) => done(err));
    });
    it("Should not return a new user because already exists ", (done) => {
        request(app)
            .post("/api/user/register")
            .send({
                'email': process.env.USER_TEST,
                'password': process.env.PASSWORD_TEST
            })
            .expect(400)
            .then((res) => {
                done();
            })
            .catch((err) => done(err));
    });
    it("should return the registred users", (done) => {
        request(app)
            .get("/api/user/all")
            .expect(200)
            .then((res) => {
                console.log(res.body);
                done();
            })
            .catch((err) => done(err));
    });
    it("Should eliminate the user ", (done) => {
        request(app)
            .delete("/api/user/id/" + idUser)
            .expect(200)
            .then((res) => {
                console.log(res.body);
                done();
            })
            .catch((err) => done(err));
    });
});