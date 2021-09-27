import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async.handler';
import Server from '../models/Server';
import { getPagination } from '../utils/paginate';

export const createServer = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const _server = await Server.create(data);

    res.status(201).send({ msg: 'Create server success', _server });
  }
);

export const getAllServers = asyncHandler(
  async (req: Request, res: Response) => {
    const _servers = await Server.find();

    res.status(200).send({ msg: 'Get all servers', _servers });
  }
);

export const getServersByCreator = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { page, size } = req.query;
    const paginate = getPagination(Number(page), Number(size));
    const { docs } = await Server.paginate({ creator: id }, paginate);

    res.status(200).send({ msg: `Get all servers by creator ${id}`, docs });
  }
);

export const updateServer = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _server = await Server.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.status(201).json({
      msg: `The server with the id ${id} has been updated`,
      _server
    });
  }
);

export const deleteServer = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _server = await Server.findByIdAndDelete(id);

    res
      .status(201)
      .json({ msg: `The server with the id ${id} has been deleted`, _server });
  }
);
