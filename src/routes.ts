import { Router } from 'express';

import { UserController } from './app/controllers/UserController';
import { AuthController } from './app/controllers/AuthController';
import { AlbumController } from './app/controllers/AlbumController';
import { UserReqMiddleware } from './app/middlewares/UserReqMiddleware';

const routes = Router();
const authenticationRoutes = Router();

const userController = new UserController();
const authController = new AuthController();
const albumController = new AlbumController();

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

routes.post('/album', albumController.create);
routes
  .route('/album/:id')
  .get(albumController.findById)
  .put(albumController.update)
  .delete(albumController.delete);

routes.get('/albums/list', albumController.index);
routes.get('/albums/find/search=:search', albumController.find);

export { routes, authenticationRoutes };
