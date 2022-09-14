import express, { Request, Response } from 'express';
import { cardController } from '../controllers/cardController';
const router = express.Router();
const controller = new cardController();

// get all cards belonging to a user
router.get('/all/:user_id', controller.getCards, (req: Request, res: Response) => res.status(200).json(res.locals.cards));

// get one card
router.get('/:id', controller.getCard, (req: Request, res: Response) => res.status(200).json(res.locals.card));

// add a card
router.post('/', controller.addCard, (req: Request, res: Response) => res.status(200).json(res.locals.newCardId));

// delete a card
router.delete('/:id', controller.deleteCard, (req: Request, res: Response) => res.status(200).json(res.locals.card));

export default router;