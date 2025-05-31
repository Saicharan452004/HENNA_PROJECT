import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const [contactRes, faqRes, appointmentRes] = await Promise.all([
      fetch('https://henna-project.onrender.com/api/contact/all'),
      fetch('https://henna-project.onrender.com/api/faq/all'),
      fetch('https://henna-project.onrender.com/api/appointment/all')
    ]);

    setContacts(await contactRes.json());
    setFaqs(await faqRes.json());
    setAppointments(await appointmentRes.json());
  };

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
            {f.question}
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
};

export default AdminDashboard;
