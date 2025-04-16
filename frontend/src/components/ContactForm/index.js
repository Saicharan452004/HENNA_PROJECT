import { useState } from "react";
import arabic2 from "../../assets/arabic2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://henna-project-3dux.vercel.app/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMsg("Appointment request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        }); // clear form
      } else {
        setResponseMsg(result.message || "Failed to submit appointment request.");
      }
    } catch (error) {
      setResponseMsg("Error connecting to the server.");
    }
  };

  return (
    <div className="contact-form-section">
      <div className="contact-form-left-section">
        <div className="contact-form-left-image-section">
          <img src={arabic2} className="contact-form-left-image" alt="image-contact" />
        </div>
        <div className="contact-form-left-description-section">
          <div className="contact-form-left-description-container">
            <FaPhoneAlt className="contact-form-left-description-icon" />
            <p className="contact-form-left-description">123456789</p>
          </div>

          <div className="contact-form-left-description-container">
            <FaPhoneAlt className="contact-form-left-description-icon" />
            <p className="contact-form-left-description">123456789</p>
          </div>

          <div className="contact-form-left-description-container">
            <MdEmail className="contact-form-left-description-icon" />
            <p className="contact-form-left-description">emailaddress123@gmail.com</p>
          </div>

          <div className="contact-form-left-description-container">
            <MdLocationOn className="contact-form-left-description-icon" />
            <p className="contact-form-left-description">37, Ayur Vigyan Nagar, New Delhi, India.</p>
          </div>
        </div>
      </div>

      <div className="contact-form-right-section">
        <h1 className="contact-form-right-section-heading">Book Your Appointment</h1>
        <form className="form-container" onSubmit={submitForm}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="Phone Number"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-field-date"
            required
          />
          <textarea
            rows={5}
            cols={40}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="input-area"
            required
          />
          <button type="submit" className="input-button">Submit</button>
        </form>
        {responseMsg && <p style={{ marginTop: "10px", color: "green", fontStyle:"bold"}}>{responseMsg}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
