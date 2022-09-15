import request from "supertest";

// import app from "../../../server/server";
const server = 'http://localhost:3000';

describe("Test cardRouter.ts", () => {
  describe('/', () => {
    it("Get all cards", () => 
      request(server).get("/card/all/1")
        .expect(200)
    );
  });
   
});