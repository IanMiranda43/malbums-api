
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
npm run dev
# with yarn
yarn dev
```

## Access the page

This can be found by accessing <a href="http://localhost:3000" target="blank">http://localhost:3000<a>

<br>

---

## License

MIT License © [Ian Miranda](https://github.com/IanMiranda43)
