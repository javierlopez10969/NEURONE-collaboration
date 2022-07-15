const app = require('../../server')
const dotenv = require("dotenv");
dotenv.config();
const expect = require('chai').expect;
const request = require('supertest');



let tempToken;

var email = process.env.USER_TEST;
var password = process.env.PASSWORD_TEST;
var idUser = "";

describe("Create of group", () => {
    //Successfully Login
    it("Should register the new user ", (done) => {
        request(app)
            .post("/api/user/register")
            .send({
                'email': email,
                'password': password
            })
            .expect(201)
            .then((res) => {
                idUser = res.body.user._id;
                expect(res.body.message).to.be.eql('User is registered successfully');
                expect(res.body.user.email).to.be.eql(email);
                done();
            })
            .catch((err) => done(err));
    });
    //Failed register
    it("Should not return a new user because already exists ", (done) => {
        request(app)
            .post("/api/user/register")
            .send({
                'email': email,
                'password': password
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).to.be.eql('User already exist');
                done();
            })
            .catch((err) => done(err));
    });
    //Login
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
});

describe("Deleting groups", () => {
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
            .delete("/api/group/all/all/")
            .expect(200)
            .then((res) => {
                expect(res.body.message).to.be.eql("All groups are deleted successfully");
                done();
            })
            .catch((err) => done(err));
    });
});