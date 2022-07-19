const app = require('../../server')
const dotenv = require("dotenv");
dotenv.config();
const expect = require('chai').expect;
const request = require('supertest');

var email = process.env.USER_TEST;
var password = process.env.PASSWORD_TEST;
var idUser = "";
var user = {};
let tempToken;
let group = {
    'name': 'My group',
    'description': 'Description of my group'};
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



describe("Create of group", () => {
    //Create a group
    it("Should create  a new group", (done) => {
        request(app)
            .post("/api/group/")
            .send({
                group ,
                user
            })
            .expect(201)
            .then((res) => {
                expect(res.body.group.name).to.be.eql(group.name);
                group = res.body.group;
                done();
            })
            .catch((err) => done(err));
    });
});

describe("Get groups", () => {
    it("Should return all the groups createds", (done) => {
        request(app)
            .get("/api/group/")
            .expect(200)
            .then((res) => {
                done();
            })
            .catch((err) => done(err));
    });
    /*
    it("Should return the groups of certain user", (done) => {
        request(app)
            .get("/api/group/user" + user._id)
            .expect(200)
            .then((res) => {
                console.log(res.body)
                done();
            })
            .catch((err) => done(err));
    });*/
    it("Should return all the groups createds", (done) => {
        request(app)
            .get("/api/group/")
            .expect(200)
            .then((res) => {
                done();
            })
            .catch((err) => done(err));
    });
});

describe("Deleting groups", () => {
    it("Should eliminate the group by id", (done) => {
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