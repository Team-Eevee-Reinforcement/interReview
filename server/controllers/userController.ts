import { Request, Response } from 'express';
import db from '../models/model';

export class userController {
  getUsers(req: Request, res: Response, next: any) {
    return next();
  }
  getUser(req: Request, res: Response, next: any) {
    return next();
  }
  async addUser(req: Request, res: Response, next: any) {
    try {
      console.log("REQUEST BODY: ", req.body)
      const queryText = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id;';
      const values = [req.body.name, req.body.email];
      const result = await db.query('add-user', queryText, values);
      console.log(result);
      res.locals.newUserId = result.rows.id;
      return next();
    }
    catch (err: any) {
      return next(err);
    }
  }
  deleteUser(req: Request, res: Response, next: any) {
    return next();
  }
};