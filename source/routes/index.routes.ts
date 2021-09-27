import { Router } from 'express';
import namespaceRoutes from './namespace.routes';
import messageRoutes from './message.routes';
import serverRoutes from './server.routes';
import { verifyPageAndSize } from '../middlewares/verify';

const router = Router();

router.use('/api', verifyPageAndSize, [
  namespaceRoutes,
  messageRoutes,
  serverRoutes
]);

export default router;
