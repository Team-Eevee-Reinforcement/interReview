import express, { Request, Response } from 'express';
import { interviewController } from '../controllers/interviewController';
const router = express.Router();

const controller = new interviewController();

// get all interviews
router.get('/all/:user_id', controller.getInterviews, (req: Request, res: Response) => res.status(200).json(res.locals.interviews));

// get one interview
router.get('/:id', controller.getInterview, (req: Request, res: Response) => res.status(200).json(res.locals.interview));

// add an interview
router.post('/', controller.addInterview, (req: Request, res: Response) => res.status(200).json({id: res.locals.newInterviewId}));

// delete an interview
router.delete('/:id', controller.deleteInterview, (req: Request, res: Response) => res.status(200).json(res.locals.interview));

// update an interview -- interview_stage
router.patch('/:id', controller.updateInterviewStage, (req: Request, res: Response) => res.status(200).json(res.locals.interview));

export default router;