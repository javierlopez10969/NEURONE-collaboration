const Bookmark = require("../server.js"),
    request = require("supertest");


describe("GET /", () => {
    test("should response with status 200", async () => {
        const response = await request(Bookmark).get("/").send();
        expect(response.status).toBe(200);
        done();
    })
});