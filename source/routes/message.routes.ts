import { Router } from 'express';
import {
  getAllMessages,
  getMessagesByNamespace,
  createMessage,
  updateMessage,
  deleteMessage
} from '../controllers/message.controllers';

const router = Router();

router.get('/messages', getAllMessages);

router.get('/messages/:namespace', getMessagesByNamespace);

router.post('/messages', createMessage);

router.put('/messages/:id', updateMessage);

router.delete('/messages/:id', deleteMessage);

export default router;
