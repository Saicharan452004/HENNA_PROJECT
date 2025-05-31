const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// POST route for submitting appointment form
router.post('/', appointmentController.submitAppointment);

router.get('/all', appointmentController.getAllAppointments);

module.exports = router;
