import { Router } from 'express';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';
import { UserReqMiddleware } from './app/middlewares/UserReqMiddleware';

const routes = Router();
const authenticationRoutes = Router();

const userController = new UserController();
const authController = new AuthController();

authenticationRoutes.post(
  '/register',
  UserReqMiddleware,
  userController.create,
);
authenticationRoutes.post(
  '/authenticate',
  UserReqMiddleware,
  authController.login,
);

routes.delete('/user', UserReqMiddleware, userController.delete);
routes.get('/logout', authController.logout);

export { routes, authenticationRoutes };
