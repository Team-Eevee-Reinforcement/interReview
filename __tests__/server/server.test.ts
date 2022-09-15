import request from "supertest";

import app from "../../server/server";

describe("Test server.ts", () => {
  it("GET responds with 200 status", async () => {
    const res = await request(app).get("/");
    console.log(res);
    expect(res.status).toEqual(200); // right now, this is only throwing an error :(
  });
});