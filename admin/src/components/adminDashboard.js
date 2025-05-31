import React, { Component } from 'react';

class AdminDashboard extends Component {
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

  render() {
    const { contacts, faqs, appointments } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h2>Admin Dashboard</h2>

        <h3>Contact Submissions</h3>
        <ul>
          {contacts.map((c, index) => (
            <li key={index}>
              {c.name} - {c.email} - {c.message}
            </li>
          ))}
        </ul>

        <h3>FAQ Submissions</h3>
        <ul>
          {faqs.map((f, index) => (
            <li key={index}>
              {f.name} - {f.subject}
            </li>
          ))}
        </ul>

        <h3>Appointments</h3>
        <ul>
          {appointments.map((a, index) => (
            <li key={index}>
              {a.name} - {a.date} - {a.service}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminDashboard;

