const routes = require('express').Router();
const myController = require('../controllers');
const contactsController = require('../controllers/contacts');
const jbController = require('../controllers/team2');

//lesson1
routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnanotherAnimal);
routes.get('/awesome2', myController.returnanotherAnimal2);

//lesson2
routes.get('/', contactsController.getAllContacts);
routes.get('/', contactsController.getSingleContact);
routes.get('/', jbController.professionalRoute);


module.exports = routes;