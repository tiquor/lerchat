import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async.handler';
import Namespace from '../models/Namespace';
import Server from '../models/Server';
import { getPagination } from '../utils/paginate';

export const createNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const ok = await Server.exists({ _id: data.server });

    if (!ok)
      res
        .status(400)
        .send({ msg: 'Sever does not exist', err: { server: true } });

    const namespaces = await Namespace.count({ server: data.server });

    if (namespaces > 49) {
      res.status(403).send({
        msg: 'Reached the limit of namespaces',
        err: { namepsaces: true }
      });
    } else {
      const _namespace = await Namespace.create(data);

      res.status(201).send({ msg: 'Create namespace success', _namespace });
    }
  }
);

export const getNamespaceById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const _namespace = await Namespace.findById(id);

    res
      .status(200)
      .send({ msg: `Get namespaces by ${id} namespace`, _namespace });
  }
);

export const getNamespacesByServer = asyncHandler(
  async (req: Request, res: Response) => {
    const { server } = req.params;
    const { page, size } = req.query;
    const options = getPagination(Number(page), Number(size));
    const { docs } = await Namespace.paginate({ server }, options);

    res.status(200).send({ msg: `Get all namespaces by ${server} server`, docs });
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
