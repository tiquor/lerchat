import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async.handler';
import User from '../models/User';

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body;
  const _user = await User.create(data);

  res.status(201).send({ msg: 'Create user success', _user });
});

export const getUsersById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const _users = await User.findById(id);

    res.status(200).send({ msg: `Get all users by creator ${id}`, _users });
  }
);

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const _user = await User.findByIdAndUpdate(id, req.body, {
    new: true
  });

  res.status(201).json({
    msg: `The user with the id ${id} has been updated`,
    _user
  });
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const _user = await User.findByIdAndDelete(id);

  res
    .status(201)
    .json({ msg: `The user with the id ${id} has been deleted`, _user });
});
