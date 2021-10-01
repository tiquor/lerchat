import { Router } from 'express';
import {
  createUser,
  deleteUser,
  updateUser,
  getUsersById
} from '../controllers/user.controllers';

const router = Router();

router.get('/users/:id', getUsersById);

router.post('/users', createUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;
