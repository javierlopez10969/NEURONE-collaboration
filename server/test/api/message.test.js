const app = require('../../server')
const dotenv = require("dotenv");
dotenv.config();
const expect = require('chai').expect;
const request = require('supertest');



let tempToken;


var email = process.env.USER_TEST;
var password = process.env.PASSWORD_TEST;
var idUser = "";

describe("Auth of users", () => {
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
    it("Should not return a new user because already exists ", (done) => {
        request(app)
            .post("/api/user/register")
            .send({
                'email': process.env.USER_TEST,
                'password': process.env.PASSWORD_TEST
            })
            .expect(400)
            .then((res) => {
                expect(res.body.error).to.be.eql('User already exist');
                done();
            })
            .catch((err) => done(err));
    });
    it("should return the registred users", (done) => {
        request(app)
            .get("/api/user/all")
            .expect(200)
            .then((res) => {
                expect(typeof (res.body)).to.be.eql('object');
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