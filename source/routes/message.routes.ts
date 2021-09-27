import { Router } from 'express';
import {
  getAllMessages,
  getMessageWithUsers,
  // getMessagesByNamespace,
  createMessage,
  updateMessage,
  deleteMessage
} from '../controllers/message.controllers';

const router = Router();

router.get('/messages', getAllMessages);

// router.get('/messages/:id', getMessagesByNamespace);

router.get('/messages/:namespace', getMessageWithUsers);

router.post('/messages', createMessage);

router.put('/messages/:id', updateMessage);

router.delete('/messages/:id', deleteMessage);

export default router;
