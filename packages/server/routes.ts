import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller.ts';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.json({ message: 'Hello World2!' });
});

router.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World3!' });
});

router.post('/api/chat', chatController.sendMessage);

export default router;
