import { Router } from 'express';
import {
  createUserServer,
  deleteUserServer,
  getUserServerByServer,
  getUserServerByUser
} from '../controllers/userServer.controllers';

const router = Router();

router.get('/user-servers/@user/:user', getUserServerByUser);

router.get('/user-servers/@server/:server', getUserServerByServer);

router.post('/user-servers', createUserServer);

router.delete('/user-servers', deleteUserServer);

export default router;
