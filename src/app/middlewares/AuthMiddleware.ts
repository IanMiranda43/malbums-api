import { Request, Response, NextFunction } from 'express';

import { ErrorWithStatusCode } from '../errors/ErrorWithStatusCode';
import { verifyJwt } from '../services/JwtService';
import { User } from '../entities/User';

interface iVerify {
  data?: string;
}

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ErrorWithStatusCode(
      400,
      'Authorization token has not been provided',
    );
  }

  const [bearer, token, test] = authorization.split(' ');

  if (test || !bearer || !token || !/^Bearer/i.test(bearer)) {
    throw new ErrorWithStatusCode(400, 'Invalid token');
  }

  const { data } = verifyJwt(token) as iVerify;

  req.body.user = await User.findOne({ email: data, token: token });

  if (!req.body.user) {
    throw new ErrorWithStatusCode(401, 'Invalid token');
  }

  next();
}
