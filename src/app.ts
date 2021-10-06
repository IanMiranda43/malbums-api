import 'dotenv/config';
import 'reflect-metadata';
import './database';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import { authenticationRoutes, routes } from './routes';
import { AuthMiddleware } from './app/middlewares/AuthMiddleware';
import { ErrorsMiddleware } from './app/middlewares/ErrorsMiddleware';

class AppController {
  constructor(public app = express()) {
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(authenticationRoutes);
    this.app.use(AuthMiddleware);
    this.app.use(routes);
  }

  errors() {
    this.app.use(ErrorsMiddleware);
  }
}

export default new AppController().app;
