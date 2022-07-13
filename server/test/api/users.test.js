import request from "supertest";
import {
    expect
} from "chai";
import dotenv from "dotenv";
dotenv.config();

import http from "../../server";
import User from "../../models/User";

const tempUser = {
    username: process.env.USER_TEST,
    password: process.env.USER_TEST_PASSWORD,
};

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
});

let tempToken;