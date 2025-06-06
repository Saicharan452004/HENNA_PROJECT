import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import AdminContact from "./components/AdminContact";
import AdminFaqs from "./components/AdminFaqs";
import AdminAppointment from "./components/AdminAppointment";
import './App.css';

class App extends Component{
  state = {
    contacts: [],
    faqs: [],
    appointments: []
  };

  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = async () => {
    try {
      const [contactRes, faqRes, appointmentRes] = await Promise.all([
        fetch('https://henna-project.onrender.com/api/contact/all'),
        fetch('https://henna-project.onrender.com/api/faq/all'),
        fetch('https://henna-project.onrender.com/api/appointment/all')
      ]);

      const contacts = await contactRes.json();
      const faqs = await faqRes.json();
      const appointments = await appointmentRes.json();

      this.setState({ contacts, faqs, appointments });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  render(){
    const { contacts, faqs, appointments } = this.state;
    return(
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route exact path="/appointments" element={<AdminAppointment appointments={appointments}/>} />
        <Route exact path="/faqs" element={<AdminFaqs faqs={faqs}/>} />
        <Route exact path="/contactus" element={<AdminContact contacts={contacts}/>} />
      </Routes>
    )
  }
}

export default App;
