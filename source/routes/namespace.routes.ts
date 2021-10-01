import { Router } from 'express';
import {
  createNamespace,
  deleteNamespace,
  updateNamespace,
  getNamespaceById,
  getNamespacesByServer
} from '../controllers/namespace.controllers';

const router = Router();

router.get('/namespaces/@server/:server', getNamespacesByServer);

router.get('/namespaces/@one/:id', getNamespaceById);

router.post('/namespaces', createNamespace);

router.patch('/namespaces/:id', updateNamespace);

router.delete('/namespaces/:id', deleteNamespace);

export default router;
