import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async.handler';
import Namespace from '../models/Namespace';
import { getPagination } from '../utils/paginate';

export const createNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const _namespace = await Namespace.create(data);

    res.status(201).send({ msg: 'Create namespace success', _namespace });
  }
);

export const getAllNamespaces = asyncHandler(
  async (req: Request, res: Response) => {
    const _namespaces = await Namespace.find();

    res.status(200).send({ msg: 'Get all namespaces', _namespaces });
  }
);

export const getNamespacesByServer = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { page, size } = req.query;
    const options = getPagination(Number(page), Number(size));
    const { docs } = await Namespace.paginate({ server: id }, options);

    res.status(200).send({ msg: `Get all namespaces by ${id} server`, docs });
  }
);

export const updateNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _namespace = await Namespace.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.status(201).json({
      msg: `The namespace with the id ${id} has been updated`,
      _namespace
    });
  }
);

export const deleteNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _namespace = await Namespace.findByIdAndDelete(id);

    res.status(201).json({
      msg: `The namespace with the id ${id} has been deleted`,
      _namespace
    });
  }
);
