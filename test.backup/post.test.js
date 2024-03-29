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

//Register And Login
request(app)
    .post("/api/user/register")
    .send({
        'email': email,
        'password': password,
        'role' : 'admin'
    })
    .expect(201)
    .then((res) => {
        idUser = res.body.user._id;
        expect(res.body.message).to.be.eql('User is registered successfully');
        expect(res.body.user.email).to.be.eql(email);
        done();
    })
    .catch((err) => done(err));

request(app)
    .post("/api/user/login")
    .send({
        'email': email,
        'password': password
    })
    .expect(200)
    .then((res) => {
        expect(res.body.status).to.be.eql('Login successfully');
        expect(res.body.user.email).to.be.eql(email);
        user = user;
        tempToken = res.body.token;
        done();
    })
    .catch((err) => done(err));

describe("Update User", () => {
    it("Should update the user", (done) => {
        user.name = "John"
        user.lastName = "Smith"
        request(app)
            .post("/api/user/update-user/" + idUser)
            .send({
                user
            })
            .expect(200)
            .then((res) => {
                console.log(res.body.user)
                done();
            })
            .catch((err) => done(err));
    });
});


describe("Get user", () => {
    it("should return the registred users", (done) => {
        request(app)
            .get("/api/user/all")
            .expect(200)
            .then((res) => {
                done();
            })
            .catch((err) => done(err));
    });
    it("Should return the user by token", (done) => {
        request(app)
            .get("/api/user/")
            .set('token', tempToken)
            .expect(200)
            .then((res) => {
                expect(res.body.status).to.be.eql('User grabbed successfully');
                expect(res.body.user.email).to.be.eql(email);
                done();
            })
            .catch((err) => done(err));
    });
});

describe("Delete users", () => {
    it("Should eliminate the user ", (done) => {
        request(app)
            .delete("/api/user/id/" + idUser)
            .expect(200)
            .then((res) => {
                expect(res.body.status).to.be.eql("User Deleted");
                done();
            })
            .catch((err) => done(err));
    });
    it("Should eliminate all", (done) => {
        request(app)
            .delete("/api/user/all/")
            .expect(200)
            .then((res) => {
                expect(res.body.message).to.be.eql("All user is deleted successfully");
                done();
            })
            .catch((err) => done(err));
    });
});