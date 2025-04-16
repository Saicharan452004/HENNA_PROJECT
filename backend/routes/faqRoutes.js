const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// POST route for submitting FAQ
console.log('FAQ POST route reached');
router.post('/', faqController.submitFAQ);
console.log('FAQ POST route reached');


module.exports = router;
