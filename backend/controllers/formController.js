const Contact = require('../models/contact');

const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    await newContact.save();
    res.status(201).json({
      message: 'Message sent successfully!',
      contact: newContact
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, please try again later.'
    });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact form submissions', error });
  }
};

const deletecontact=async(req,res)=>{
  try{
    const deletedcontact=await Contact.findByIdAndDelete(req.params.id)
    if(!deletedcontact){
      return res.status(404).json({message:"contact not found"});
    }
    res.json({message:"contact deleted successfully"});
  }
  catch(error){
    console.error("Error deleting contact",error);
    res.status(500).json({message:"server error deleting contact"});
  }
;}

module.exports = {
  getAllContacts,
  submitContactForm,
  deletecontact
};