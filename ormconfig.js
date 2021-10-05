require('dotenv/config');
const process = require('process');

const env = process.env.NODE_ENV || 'production';

const connection = {
  development: {
    type: process.env.DB_TYPE_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV,
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    database: process.env.DB_NAME_DEV,
    logging: true,
    entities: ['src/app/entities/**/*.ts'],
    subscribers: ['src/app/subscribers/**/*.ts'],
    migrations: ['src/database/migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/app/entities',
      subscribersDir: 'src/app/subscribers',
      migrationsDir: 'src/database/migrations',
    },
  },
  production: {
    type: process.env.DB_TYPE_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASS_PROD,
    database: process.env.DB_NAME_PROD,
    logging: false,
    entities: ['src/app/entities/**/*.ts'],
    subscribers: ['src/app/subscribers/**/*.ts'],
    migrations: ['src/database/migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/app/entities',
      subscribersDir: 'src/app/subscribers',
      migrationsDir: 'src/database/migrations',
    },
  },
};

module.exports = connection[env];
