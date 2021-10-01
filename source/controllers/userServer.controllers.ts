import asyncHandler from '../middlewares/async.handler';
import { Request, Response } from 'express';
import UserServer from '../models/UserServer';
import Server from '../models/Server';
import User from '../models/User';

export const createUserServer = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const _userServer = await UserServer.create(data);

    res
      .status(201)
      .json({ msg: 'Successfully created UserServer', _userServer });
  }
);

export const getUserServerByUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { user } = req.params;
    const _prevServers = await UserServer.find({ user });
    const _serversId = _prevServers.map((el) => el.server);

    const _servers = await Server.find({
      _id: {
        $in: _serversId
      }
    });

    res.send({
      msg: `All the servers of the user with the ${user} were obtained`,
      _servers
    });
  }
);

export const getUserServerByServer = asyncHandler(
  async (req: Request, res: Response) => {
    const { server } = req.params;
    const _prevServers = await UserServer.find({ server });
    const _usersId = _prevServers.map((el) => el.user);

    const _servers = await User.find({
      _id: {
        $in: _usersId
      }
    });

    res.send({
      msg: `All the users of the server with the ${server} were obtained`,
      _servers
    });
  }
);

export const deleteUserServer = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const _userServer = await UserServer.findByIdAndDelete(id);

    res.status(201).json({
      msg: `The userServer with the id ${id} has been deleted`,
      _userServer
    });
  }
);
