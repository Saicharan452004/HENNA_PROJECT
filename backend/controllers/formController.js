const Contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create a new contact entry
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    // Save the contact entry to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({
      message: 'Message sent successfully!',
      contact: newContact
    });
  } catch (error) {
    // Handle errors and send failure response
    res.status(500).json({
      message: 'Something went wrong, please try again later.'
    });
  }
};
