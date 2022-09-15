import request from "supertest";

import app from "../../../server/app";
// const server = 'http://localhost:3000/';

describe("Test interviewRouter.ts, status codes", () => {
  describe('/interview', () => {
    describe('GET', () => {
      it("Get all interviews of a user", () => request(app).get("/interview/all/1")
        .expect(200)
      );

      it('interviews from "DB" json are in body of response', () => request(app)
        .get('/interview/all/1')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then(response => {
          expect(Array.isArray(response.body.interviews));
        }));

      it("Get one interview", () => request(app).get("/interview/1")
        .expect(200)
      );
    });

    describe('POST', () => {
      it("Add an interview", () => request(app).post("/interview")
        .send({"user_id": 1, "job_title": "new job", "interview_stage": "applied", "date": "09/15/2022"}) // add interview
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('PATCH', () => {
      it("Update an interview", () => request(app).patch("/interview/1")
        .send({"stage": "offer accepted"}) // update interview stage
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('DELETE', () => {
      it("Delete an interview", () => request(app).delete(`/interview/7`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });
  });
  
});