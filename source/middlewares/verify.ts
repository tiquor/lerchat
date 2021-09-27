import { NextFunction, Request, Response } from 'express';

export const verifyPageAndSize = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, size } = req.query;
  if (page === undefined) {
    req.query.page = '1';
  }

  if (Number(page) < 1) {
    res.status(400).json({ error: 'Page cannot be less than one' });
  }

  if (Number(size) < 1) {
    res.status(400).json({ error: 'Size cannot be less than one' });
  }

  next();
};
