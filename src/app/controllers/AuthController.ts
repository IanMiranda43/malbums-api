import { ErrorWithStatusCode } from '../errors/ErrorWithStatusCode';
import { Request, Response } from 'express';
import { compare } from 'bcrypt';

import { User } from '../entities/User';
import { generateUserJwt } from '../services/JwtService';

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new ErrorWithStatusCode(401, 'Email or password is invalid');
    }

    if (!(await compare(password, user.password as string))) {
      throw new ErrorWithStatusCode(401, 'Email or password is invalid');
    }

    user.token = generateUserJwt(email);

    await user.save();
    delete user.password;

    res.status(200).json(user);
  }

  async logout(req: Request, res: Response) {
    const { user } = req.body;

    user.token = null;

    await user.save();
    delete user.password;

    res.status(200).json({ status: 'success', message: 'Successfully logout' });
  }
}
