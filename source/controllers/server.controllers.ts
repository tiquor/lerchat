import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async.handler';
import Server from '../models/Server';
import User from '../models/User';
import UserServer from '../models/UserServer';

export const createServer = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const ok = await User.exists({ _id: data.creator });

    if (!ok)
      res.status(400).send({ msg: 'User does not exist', err: { user: true } });

    const servers = await UserServer.count({ user: data.creator });

    if (servers > 19) {
      res
        .status(403)
        .send({ msg: 'Reached the limit of servers', err: { server: true } });
    } else {
      const _server = await Server.create(data);
      res.status(201).send({ msg: 'Create server success', _server });
    }
  }
);

export const getServerById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const _server = await Server.findById(id);

    res.status(200).send({ msg: `Obtained server by id ${id}`, _server });
  }
);

export const getServersByCreator = asyncHandler(
  async (req: Request, res: Response) => {
    const { creator } = req.params;
    const _servers = await Server.find({ creator });

    res.status(200).send({ msg: `Get all servers by creator ${creator}`, _servers });
  }
);

export const updateServer = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const ok = await Server.exists({ _id: id });

    if (!ok)
      res
        .status(400)
        .send({ msg: 'The server does not exist', err: { server: true } });

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
    const ok = await Server.exists({ _id: id });

    if (!ok)
      res
        .status(400)
        .send({ msg: 'The server does not exist', err: { server: true } });

    const _server = await Server.findByIdAndDelete(id);

    res
      .status(201)
      .json({ msg: `The server with the id ${id} has been deleted`, _server });
  }
);
