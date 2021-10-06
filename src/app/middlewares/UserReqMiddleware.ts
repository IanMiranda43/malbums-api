import { NextFunction, Request, Response } from 'express';

import { ErrorWithStatusCode } from '../errors/ErrorWithStatusCode';
import { RequiredFieldError } from '../errors/RequiredFieldError';

export function UserReqMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email, password, confirmPassword, username } = req.body;

  if (!email) {
    throw new RequiredFieldError('email');
  }

  if (!password) {
    throw new RequiredFieldError('password');
  }

  if (req.route.path === '/register') {
    if (!username) {
      throw new RequiredFieldError('username');
    }

    if (!confirmPassword) {
      throw new RequiredFieldError('confirmPassword');
    }

    if (password !== confirmPassword) {
      throw new ErrorWithStatusCode(
        400,
        'Password and confirm password does not match',
      );
    }
  }

  if (email.split('@').length !== 2) {
    throw new ErrorWithStatusCode(400, 'Invalid email format');
  }

  next();
}
