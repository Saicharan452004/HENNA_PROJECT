require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const faqRoutes = require('./routes/faqRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
 // Import the routes

const app = express();

// Middleware
app.use(cors());
app.use(cors({
  origin: "http://localhost:3000", // your frontend origin
  credentials: true
}));
// Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Use routes
app.use('/api', contactRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/appointment', appointmentRoutes);


console.log('Routes set up');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Set up the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
