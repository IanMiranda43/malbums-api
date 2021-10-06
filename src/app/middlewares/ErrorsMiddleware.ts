/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export function ErrorsMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const statusCode = parseInt(err.name);

  if (!isNaN(statusCode)) {
    return res.status(statusCode).json({ message: err.message });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
