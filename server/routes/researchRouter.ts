import express, { Request, Response } from 'express';
import { researchController } from '../controllers/researchController';
const router = express.Router();
const controller = new researchController(); 

// get all research links
router.get('/', controller.getLinks, (req: Request, res: Response) => res.status(200).json(res.locals.links));

// get one research link
router.get('/:id', controller.getLink, (req: Request, res: Response) => res.status(200).json(res.locals.link));

// add a research link
router.post('/', controller.addLink, (req: Request, res: Response) => res.status(200).json(res.locals.link));

// delete a research link
router.delete('/:id', controller.deleteLink, (req: Request, res: Response) => res.status(200).json(res.locals.link));

module.exports = router;