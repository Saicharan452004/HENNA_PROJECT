const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// POST route for contact form
router.post('/contact', formController.submitContactForm);

module.exports = router;
