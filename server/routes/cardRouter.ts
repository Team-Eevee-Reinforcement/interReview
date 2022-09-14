import express, { Request, Response } from 'express';
import { cardController } from '../controllers/cardController';
const router = express.Router();
const controller = new cardController();

// get all cards
router.get('/', controller.getCards, (req: Request, res: Response) => res.status(200).json(res.locals.cards));

// get one card
router.get('/:id', controller.getCard, (req: Request, res: Response) => res.status(200).json(res.locals.card));

// add a card
router.post('/', controller.addCard, (req: Request, res: Response) => res.status(200).json(res.locals.card));

// delete a card
router.delete('/:id', controller.deleteCard, (req: Request, res: Response) => res.status(200).json(res.locals.card));

module.exports = router;