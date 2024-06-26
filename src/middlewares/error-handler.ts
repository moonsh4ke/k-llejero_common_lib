import { Request, Response, NextFunction } from 'express'
import CustomError from '../errors/custom-error'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).send(err.serializeError());
  }

  console.error(err);
  return res.status(400).send('Something went wrong');
}
