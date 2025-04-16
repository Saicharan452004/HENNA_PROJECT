const AppointmentForm = require('../models/AppointmentForm');

// Controller function for submitting appointment form data
const submitAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    // Create a new Appointment document using the received data
    const newAppointmentForm = new AppointmentForm({
      name,
      email,
      phone,
      date,
      message
    });

    // Save the new appointment to the database
    const savedAppointment = await newAppointmentForm.save();

    // Send a success response with the saved appointment data
    res.status(200).json({
      message: 'Appointment submitted successfully!',
      appointment: savedAppointment
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting appointment', error });
  }
};

module.exports = {
  submitAppointment
};
