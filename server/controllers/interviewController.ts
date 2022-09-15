import { Request, Response } from 'express';
import db from '../models/model';

export class interviewController {
  addInterview(req: Request, res: Response, next: any) {
    try {
      console.log("REQUEST BODY: ", req.body)
      const date = new Date(req.body.date);
      const queryText = 'INSERT INTO interviews (user_id, job_title, interview_stage, date) VALUES ($1, $2, $3, $4) RETURNING id;';
      const values = [req.body.user_id, req.body.job_title, req.body.interview_stage, date];

      // console.log("values: ", values)
      db.query('add-interview', queryText, values).then((data: any) => {
        console.log(data)
        res.locals.newInterviewId = data.rows.id;
        return next();
      }).catch((err: any) => {
        return next(err);
      })
    }
    catch (err: any) {
      return next(err);
    }
  }

  getInterviews(req: Request, res: Response, next: any) {
    // get all interviews for a specific user
    const getInterviews = `SELECT interviews.* FROM interviews 
      WHERE interviews.user_id=${req.params.user_id};`;
    db.query('get-interviews', getInterviews, []).then((data: any) => {
      res.locals.interviews = data.rows;
      console.log(res.locals.interviews);
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  getInterview(req: Request, res: Response, next: any) {
    const getInterview = `SELECT * FROM interviews WHERE id=${req.params.id};`;
    db.query('get-interview', getInterview, []).then((data: any) => {
      res.locals.interview = data.rows;
      console.log(res.locals.interview)
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }
  
  deleteInterview(req: Request, res: Response, next: any) {
    // console.log("deleting");
    // console.log("req.params: ", req.params);
    // console.log("req.query: ", req.query)
    const deleteInterview = `DELETE FROM interviews WHERE id=${req.params.id};`;
    db.query('delete-interview', deleteInterview, []).then((data: any) => {
      res.locals.interview = data.rows;
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }

  updateInterviewStage(req: Request, res: Response, next: any) {
    const updateInterviewStage = `UPDATE interviews SET interview_stage='${req.body.stage}' WHERE id=${req.params.id} RETURNING *;`
    db.query('update-interview-stage', updateInterviewStage, []).then((data: any) => {
      console.log("data: ", data)
      res.locals.interview = data.rows;
      return next();
    }).catch((err: any) => {
      return next(err);
    })
  }
};