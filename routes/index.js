const {awesomeFunction} = require('../controllers');

const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnanotherAnimal);
routes.get('/awesome2', myController.returnanotherAnimal2);


module.exports = routes;