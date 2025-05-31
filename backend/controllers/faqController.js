const FAQ = require('../models/FAQ');


const submitFAQ = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newFAQ = new FAQ({
      name,
      email,
      subject,
      message
    });
    const savedFAQ = await newFAQ.save();
    res.status(200).json({
      message: 'FAQ submitted successfully!',
      faq: savedFAQ
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting FAQ', error });
  }
};

const getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error });
  }
};

module.exports = {
  submitFAQ,
  getAllFAQs
};
