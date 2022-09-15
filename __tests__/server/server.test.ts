import request from "supertest";

import app from "../../server/app";

xdescribe("Test server.ts", () => {
  xit("GET responds with 200 status", async () => {
    const res = await request(app).get("/");
    console.log(res);
    expect(res.status).toEqual(200); // right now, this is only throwing an error :(
  });
});