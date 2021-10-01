import { Router } from 'express';
import {
  getMessagesByNamespace,
  createMessage,
  updateMessage,
  deleteMessage
} from '../controllers/message.controllers';

const router = Router();

router.get('/messages/:namespace', getMessagesByNamespace);

router.post('/messages', createMessage);

router.patch('/messages/:id', updateMessage);

router.delete('/messages/:id', deleteMessage);

export default router;
