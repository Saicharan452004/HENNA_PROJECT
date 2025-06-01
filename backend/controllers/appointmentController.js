const AppointmentForm = require('../models/AppointmentForm');


const submitAppointment = async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;

    const newAppointmentForm = new AppointmentForm({
      name,
      email,
      phone,
      date,
      message
    });

    const savedAppointment = await newAppointmentForm.save();
    res.status(200).json({
      message: 'Appointment submitted successfully!',
      appointment: savedAppointment
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting appointment', error });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentForm.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteAppointment=async(req,res)=>{
  try{
    const deletedAppointment=await AppointmentForm.findByIdAndDelete(req.params.id)
    if(!deletedAppointment){
      return res.status(404).json({message:"Appointment not found"});
    }
    res.json({message:"Appointment deleted successfully"});
  }
  catch(error){
    console.error("Error deleting Appointment",error);
    res.status(500).json({message:"server error deleting appointment"});
  }
;}

module.exports = {
  submitAppointment,
  getAllAppointments,
  deleteAppointment
};
