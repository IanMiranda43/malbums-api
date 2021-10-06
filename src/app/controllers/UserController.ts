import { ErrorWithStatusCode } from '../errors/ErrorWithStatusCode';
import { Request, Response } from 'express';
import { hash } from 'bcrypt';

import { User } from '../entities/User';
import { generateUserJwt } from '../services/JwtService';

export class UserController {
  async create(req: Request, res: Response) {
    const { username, email, password } = req.body;

    if (await User.findOne({ email })) {
      throw new ErrorWithStatusCode(409, 'User already exists');
    }

    const passwordHash = await hash(password, 10);

    const token = generateUserJwt(email);

    const user = User.create({
      username,
      email,
      password: passwordHash,
      token,
    });

    await User.save(user);

    delete user.password;

    return res.status(201).json({ status: 'success', user });
  }

  async delete(req: Request, res: Response) {
    const { user } = req.body;

    if (!user) {
      throw new ErrorWithStatusCode(404, 'User not found');
    }

    await user.remove();

    return res.status(200).json({
      status: 'success',
      message: 'User successfully deleted',
    });
  }
}
