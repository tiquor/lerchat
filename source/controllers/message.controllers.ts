import asyncHandler from '../middlewares/async.handler';
import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { getPagination } from '../utils/paginate';
import Message from '../models/Message';
import User from '../models/User';

export const createMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const _message = await Message.create(data);

    res.status(201).json({ msg: 'Successfully created message', _message });
  }
);

export const getMessagesByNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const { namespace } = req.params;
    const { page, size } = req.query;
    const options = getPagination(Number(page), Number(size), true);
    const { docs: prevMessages } = await Message.paginate(
      { namespace },
      options
    );

    const _usersId = prevMessages.map((el) => el.author);
    const _users = await User.find({
      _id: {
        $in: _usersId
      }
    });

    const refactorUsers = _users.reduce<{ [key: string]: Document }>(
      (acc, user) => {
        acc[user._id] = user;
        return acc;
      },
      {}
    );

    const docs = prevMessages.map((message) => ({
      ...message._doc,
      author: refactorUsers[message.author]
    }));

    res.status(200).json({
      msg: `All the messages of the namespace with the ${namespace} were obtained`,
      docs
    });
  }
);

export const updateMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _message = await Message.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.status(201).json({
      msg: `The message with the id ${id} has been updated`,
      _message
    });
  }
);

export const deleteMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const _message = await Message.findByIdAndDelete(id);

    res.status(201).json({
      msg: `The message with the id ${id} has been deleted`,
      _message
    });
  }
);
