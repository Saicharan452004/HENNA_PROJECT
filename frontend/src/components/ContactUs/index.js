import { useState } from "react"
import Footer from "../Footer"
import Header1 from "../Header1"
import Header2 from "../Header2"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import "./index.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [responseMsg, setResponseMsg] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitForm = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("https://henna-project.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setResponseMsg("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" }) 
      } else {
        setResponseMsg(result.message || "Failed to send message.")
      }
    } catch (error) {
      setResponseMsg("Error connecting to the server.")
    }
  }

  return (
    <div className="home-container">
      <Header1 />
      <Header2 />
      <div className="contact-us-container">
        <div className="contact-us-left-container">
          <h1 className="contact-us-left-heading">Contact Info</h1>
          <div className="contact-us-left-description">
            <FaPhoneAlt className="contact-us-left-icon" />
            <p className="contact-us-left-paragraph">
              123456789<span className="contact-us-left-span">987654321</span>
            </p>
          </div>
          <div className="contact-us-left-description">
            <MdEmail className="contact-us-left-icon" />
            <p className="contact-us-left-paragraph">emailaddress123@gmail.com</p>
          </div>
          <div className="contact-us-left-description">
            <MdLocationOn className="contact-us-left-icon" />
            <p className="contact-us-left-paragraph">37, Ayur Vigyan Nagar, New Delhi, India.</p>
          </div>
        </div>

        <div className="contact-us-right-section">
          <h1 className="contact-us-right-section-heading">Get In Touch</h1>

          <form className="contact-us-form-container" onSubmit={submitForm}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field-contact-us"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field-contact-us"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input-field-contact-us"
              placeholder="Subject"
              required
            />
            <textarea
              rows={5}
              cols={40}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="input-area-contact-us"
              required
            />
            <button type="submit" className="contact-us-input-button">Submit</button>
            {responseMsg && <p style={{ marginTop: "10px", color: "green", fontStyle:"bold"}}>{responseMsg}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
