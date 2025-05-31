const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// POST route for submitting FAQ
router.post('/', faqController.submitFAQ);

router.get('/all', async (req, res) => {
  const faqs = await faqController.find();
  res.json(faqs);
});

module.exports = router;
