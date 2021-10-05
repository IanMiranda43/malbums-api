
<h1 align="center"> 
	malbums-api
</h1>

<br>

Developed with Express, `malbums-api` it's a music albums management system. Malbums means 'music albums', it's simple but sufficient for this project. 

### The system use: 
* `Express` to deal with routes
* `TypeORM` as ORM
* `Typescript` as development 'language'
* `Eslint` to code lint
* `Prettier` to code style
* `eslint-plugin-prettier` and `eslint-config-prettier` to make a better configuration between `Prettier` and `Eslint`

## Requirements

### System requirements

Before start, check if you have installed and configured the following tools:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)

### Editor requirements

The system is configured to a better code style with development tools like `Eslint` and `Prettier`, but to this tools work it's necessary to have installed and configured the following extensions in your code editor: 

* [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (more details in https://eslint.org/)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (more details in https://prettier.io/)

## Getting started

### Cloning the repository

Clone this repository by running:

```bash
git clone git@github.com:IanMiranda43/malbums-api.git
```
### Configuring the project

Access the project folder and then set your server port and DB credentials in the `.env` file.

```env
PORT=3000

# DB credentials for DEV and PROD environments
DB_DATABASE_DEV=database
DB_USER_DEV=user
DB_PASS_DEV=password
DB_HOST_DEV=db #127.0.0.1
DB_PORT_DEV=3306

DB_DATABASE_PROD=database
DB_USER_PROD=user
DB_PASS_PROD=password
DB_HOST_PROD=db #127.0.0.1
DB_PORT_PROD=3306
```
_The `.env.example` file have this layout, just set your data there and remove the `.example` extension from it._

## Working with Docker

The project has all the Docker configurations that its needed. If do you want to run with containers, there are configured to run the node project in one and the database in another. With that your containers will be created and the project configured properly without to need any intervention before its running.

The database container need to be configured with the **database**, **username** and **user password** before its builded. To make that, we have an `.env.example` file in the path `.docker/mysql/.env.example`. Copy or rename that file to `.env` and set your database config in there like bellow.


```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=database
MYSQL_USER=username
MYSQL_PASSWORD=password
```

_remember that this credentials will be used by your system and needs to be the same that you configured at the main `.env` file in the root folder_

After that, run the following to build your docker images:

```bash
docker-compose build
```

To create and start your containers, run the following command:

```bash
docker-compose up
```

## Configuring without Docker

If you did not want to use Docker you can configure the server by yourself:

_Remember that in this case you need to have an configured and running MySQL database_

### Installing the dependencies:

In the project folder run de following code. This will create a `node_modules` folder and download and install all the project dependencies in there. 

```bash
# with npm
npm install
# with yarn
yarn install
```

### Start the server:

The script will run the migrations and then start the application at the port setted on the `.env` file.

```bash
# with npm
npm run start:dev
# with yarn
yarn start:dev
```

## Access the page

This can be found by accessing <a href="http://localhost:3000" target="blank">http://localhost:3000<a>

<br>

---

## License

MIT License © [Ian Miranda](https://github.com/IanMiranda43)
