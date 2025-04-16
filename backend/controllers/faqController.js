const FAQ = require('../models/FAQ');

// Controller function for submitting FAQ form data
const submitFAQ = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create a new FAQ document using the received data
    const newFAQ = new FAQ({
      name,
      email,
      subject,
      message
    });

    // Save the new FAQ to the database
    const savedFAQ = await newFAQ.save();

    // Send a success response with the saved FAQ data
    res.status(200).json({
      message: 'FAQ submitted successfully!',
      faq: savedFAQ
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting FAQ', error });
  }
};

module.exports = {
  submitFAQ
};
