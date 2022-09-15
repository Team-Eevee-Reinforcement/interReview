import request from "supertest";

import app from "../../../server/app";
// const server = 'http://localhost:3000/';

describe("Test cardRouter.ts, status codes", () => {
  describe('/card', () => {
    describe('GET', () => {
      it("Get all cards", () => request(app).get("/card/all/1")
        .expect(200)
      );

      it('cards from "DB" json are in body of response', () => request(app)
        .get('/card/all/1')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then(response => {
          expect(Array.isArray(response.body.cards));
        }));

      it("Get one card", () => request(app).get("/card/1")
        .expect(200)
      );
    });

    describe('POST', () => {
      it("Add a card", () => request(app).post("/card")
        .send({"interview_id": 1, "question": "question", "category": "category", "card_notes": "notes"}) // send card
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('PATCH', () => {
      it("Update a card", () => request(app).patch("/card/1")
        .send({"notes": "new notes"}) // send card
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('DELETE', () => {
      it("Delete a card", () => request(app).delete(`/card/7`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });
  });
  
});