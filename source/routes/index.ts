import { Router } from 'express';
import userServerRoutes from './userServer.routes';
import namespaceRoutes from './namespace.routes';
import messageRoutes from './message.routes';
import serverRoutes from './server.routes';
import userRoutes from './user.routes';
import { verifyPageAndSize } from '../middlewares/verify';

const router = Router();

router.use('/api', verifyPageAndSize, [messageRoutes, serverRoutes]);

router.use('/api', [namespaceRoutes, userServerRoutes, userRoutes]);

export default router;
