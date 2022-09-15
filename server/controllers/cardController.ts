import { Request, Response } from 'express';
import db from '../models/model';

export class cardController {
  addCard(req: Request, res: Response, next: any) {
    try {
      // console.log("REQUEST BODY: ", req.body)

      const queryText = 'INSERT INTO cards (interview_id, question, category, card_notes, confidence_level) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
      const values = [req.body.interview_id, req.body.question, req.body.category, req.body.card_notes, 0];

      // console.log("values: ", values)
      db.query('add-card', queryText, values).then((data: any) => {
        // console.log(data)
        res.locals.newCardId = data.rows.id;
        return next();
      }).catch((err: any) => {
        return next(err);
      })
    }
    catch (err: any) {
      return next(err);
    }
  }

  getCards(req: Request, res: Response, next: any) {
    // get all cards for a specific user
    const getCards = `SELECT cards.* FROM interviews 
      RIGHT JOIN cards
      ON interviews.id = cards.interview_id
      WHERE interviews.user_id=${req.params.user_id};`;
    db.query('get-cards', getCards, []).then((data: any) => {
      res.locals.cards = data.rows;
      // console.log(res.locals.cards);
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  getCard(req: Request, res: Response, next: any) {
    const getCard = `SELECT * FROM cards WHERE id=${req.params.id};`;
    db.query('get-card', getCard, []).then((data: any) => {
      res.locals.card = data.rows;
      // console.log(res.locals.card)
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }
  
  deleteCard(req: Request, res: Response, next: any) {
    // console.log("deleting");
    // console.log("req.params: ", req.params);
    // console.log("req.query: ", req.query)
    const deleteCard = `DELETE FROM cards WHERE id=${req.params.id};`;
    db.query('delete-card', deleteCard, []).then((data: any) => {
      res.locals.card = data.rows;
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  updateCardNotes(req: Request, res: Response, next: any) {
    // console.log("updating")
    // console.log(req.body.notes);
    // console.log(req.params.id);
    const updateCardNotes = `UPDATE cards SET card_notes='${req.body.notes}' WHERE id=${req.params.id} RETURNING *;`
    db.query('update-card-notes', updateCardNotes, []).then((data: any) => {
      // console.log("data: ", data)
      res.locals.card = data.rows;
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }
};