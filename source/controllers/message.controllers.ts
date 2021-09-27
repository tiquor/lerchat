import { createConnection, Document } from 'mongoose';
import asyncHandler from '../middlewares/async.handler';
import { Request, Response } from 'express';
import Message from '../models/Message';
import User from '../models/User';
import config from '../config';

export const createMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;
    const _message = await Message.create(data);

    res.status(201).json({ msg: 'Successfully created message', _message });
  }
);

export const getAllMessages = asyncHandler(
  async (req: Request, res: Response) => {
    const _messages = await Message.find();

    res.status(200).send({ msg: 'Get all messages', _messages });
  }
);

export const getMessagesByNamespace = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const _messages = await Message.find({ namespace: id });

    res.status(200).send({ msg: `Messages obtained from ${id}`, _messages });
  }
);

export const getMessageWithUsers = asyncHandler(
  async (req: Request, res: Response) => {
    const { namespace } = req.params;
    const _messages = await Message.find({ namespace });
    const _usersId = _messages.map((el) => el.author);

    const connection = createConnection(config.DB_TIQUOR);
    const UserModel = connection.model('Users', User);
    const _users = await UserModel.find({
      _id: {
        $in: _usersId
      }
    });

    const refactorUsers = _users.reduce<{ [key: string]: Document }>(
      (acc, el) => {
        acc[el._id] = el;
        return acc;
      },
      {}
    );

    const _newMessages = _messages.map((message) => ({
      ...message._doc,
      author: refactorUsers[message.author]
    }));

    res.status(200).json({
      msg: `All the messages of the namespace with the ${namespace} were obtained`,
      _newMessages,
      refactorUsers
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
