import { Router } from 'express';
import {
  createNamespace,
  deleteNamespace,
  getAllNamespaces,
  updateNamespace,
  getNamespacesByServer
} from '../controllers/namespace.controllers';

const router = Router();

router.get('/namespaces', getAllNamespaces);

router.get('/namespaces/:id', getNamespacesByServer);

router.post('/namespaces', createNamespace);

router.put('/namespaces/:id', updateNamespace);

router.delete('/namespaces/:id', deleteNamespace);

export default router;
