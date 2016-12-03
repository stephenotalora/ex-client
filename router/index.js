const app = require('./../src/html/app');
const Router = require('express').Router();

Router.get('/', (req, res) => {
	res.send(app());
});

module.exports = exports = Router;
