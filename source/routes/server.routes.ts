import { Router } from 'express';
import {
  createServer,
  updateServer,
  deleteServer,
  getServerById,
  getServersByCreator
} from '../controllers/server.controllers';

const router = Router();

router.get('/servers/:id', getServerById);

router.get('/servers/@me/:creator', getServersByCreator);

router.post('/servers', createServer);

router.patch('/servers/:id', updateServer);

router.delete('/servers/:id', deleteServer);

export default router;
