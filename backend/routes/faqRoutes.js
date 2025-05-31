const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// POST route for submitting FAQ
router.post('/', faqController.submitFAQ);

router.get('/all', faqController.getAllFAQs);

module.exports = router;
