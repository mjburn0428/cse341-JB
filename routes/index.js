const express = require('express');
const router = express.Router();
const myController = require('../controllers');


//lesson1
router.get('/', myController.awesomeFunction);
router.get('/awesome', myController.returnanotherAnimal);
router.get('/awesome2', myController.returnanotherAnimal2);

//lesson2
router.use('/contacts', require('./contacts'))

//lesson4 Swagger
router.use('/', require('./swagger'));

module.exports = router;