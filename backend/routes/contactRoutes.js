const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// POST route for contact form
router.post('/contact', formController.submitContactForm);

router.get('/all', formController.getAllContacts);

router.delete('/:id',formController.deletecontact);

module.exports = router;
