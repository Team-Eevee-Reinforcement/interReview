import request from "supertest";

import app from "../../../server/app";

describe("Test researchRouter.ts, status codes", () => {
  describe('/research', () => {
    describe('GET', () => {
      it("Get all research links of a card", () => request(app).get("/research/all/1")
        .expect(200)
      );

      it('researchs from "DB" json are in body of response', () => request(app)
        .get('/research/all/1')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then(response => {
          expect(Array.isArray(response.body.researchs));
        }));

      it("Get one research link", () => request(app).get("/research/1")
        .expect(200)
      );
    });

    describe('POST', () => {
      it("Add a research link", () => request(app).post("/research")
        .send({"card_id": 1, "url": "mdn.org", "research_notes": "docs!"}) // add research
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('PATCH', () => {
      it("Update a research link", () => request(app).patch("/research/1")
        .send({"notes": "documentation"}) // update research notes
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });

    describe('DELETE', () => {
      it("Delete a research link", () => request(app).delete(`/research/7`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
      );
    });
  });
  
});