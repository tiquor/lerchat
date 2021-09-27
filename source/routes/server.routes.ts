import { Router } from 'express';
import {
  createServer,
  updateServer,
  deleteServer,
  getAllServers,
  getServersByCreator
} from '../controllers/server.controllers';

const router = Router();

router.get('/servers', getAllServers);

router.get('/servers/:id', getServersByCreator);

router.post('/servers', createServer);

router.put('/servers/:id', updateServer);

router.delete('/servers/:id', deleteServer);

export default router;
