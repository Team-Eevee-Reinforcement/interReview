import express, { Request, Response } from 'express';
import { userController } from '../controllers/userController';
const router = express.Router();
const controller = new userController();

// get all users
router.get('/', controller.getUsers, (req: Request, res: Response) => res.status(200).json(res.locals.users));

// get one user
router.get('/:id', controller.getUser, (req: Request, res: Response) => res.status(200).json(res.locals.user));

// add a user
router.post('/', controller.addUser, (req: Request, res: Response) => res.status(200).json(res.locals.newUserId));

// delete a user
router.delete('/:id', controller.deleteUser, (req: Request, res: Response) => res.status(200).json(res.locals.user));

export default router;