const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
//lesson2
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

//lesson3
router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
