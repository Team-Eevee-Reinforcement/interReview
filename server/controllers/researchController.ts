import { Request, Response } from 'express';
import db from '../models/model';

export class researchController {
  addLink(req: Request, res: Response, next: any) {
    try {
      console.log("REQUEST BODY: ", req.body)

      const queryText = 'INSERT INTO research (card_id, url, research_notes) VALUES ($1, $2, $3) RETURNING id;';
      const values = [req.body.card_id, req.body.url, req.body.research_notes];

      // console.log("values: ", values)
      db.query('add-link', queryText, values).then((data: any) => {
        console.log(data)
        res.locals.newLinkId = data.rows.id;
        return next();
      }).catch((err: any) => {
        return next(err);
      })
    }
    catch (err: any) {
      return next(err);
    }
  }

  getLinks(req: Request, res: Response, next: any) {
    // get all links for a specific card
    const getCards = `SELECT research.* FROM research 
      WHERE research.card_id=${req.params.card_id};`;
    db.query('get-cards', getCards, []).then((data: any) => {
      res.locals.cards = data.rows;
      console.log(res.locals.cards);
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  getLink(req: Request, res: Response, next: any) {
    const getLink = `SELECT * FROM research WHERE id=${req.params.id};`;
    db.query('get-resource', getLink, []).then((data: any) => {
      res.locals.link = data.rows;
      console.log(res.locals.link)
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }
  
  deleteLink(req: Request, res: Response, next: any) {
    // console.log("deleting");
    // console.log("req.params: ", req.params);
    // console.log("req.query: ", req.query)
    const deleteLink = `DELETE FROM research WHERE id=${req.params.id};`;
    db.query('delete-link', deleteLink, []).then((data: any) => {
      res.locals.link = data.rows;
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  updateResearchNotes(req: Request, res: Response, next: any) {
    return next();
  }
};