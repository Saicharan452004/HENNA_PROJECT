import { useState } from "react"
import Header1 from "../Header1"
import Header2 from "../Header2"
import Footer from "../Footer"
import Faq from "../Faq"
import "./index.css"

const Faqs = (props) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // State for response message
  const [responseMsg, setResponseMsg] = useState("")

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const submitForm = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData) // Sending the form data
      })

      const result = await response.json()

      if (response.ok) {
        setResponseMsg("FAQ submitted successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" }) // clear form
      } else {
        setResponseMsg(result.message || "Failed to submit FAQ.")
      }
    } catch (error) {
      setResponseMsg("Error connecting to the server.")
    }
  }

  return (
    <div className="home-container">
      <Header1 />
      <Header2 />
      <div className="faqs-section">
        <h1 className="faqs-section-heading">Frequently Asked Questions</h1>    
        <div className="faqs-containers">
          <div className="faqs-section-container-left">
            <h1 className="contact-form-right-section-heading">Make Your Questions</h1>
            <form className="form-container" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
                placeholder="Your Subject"
                required
              />
              <textarea
                rows={5}
                cols={40}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="input-area"
                required
              />
              <button type="submit" className="input-button">Submit</button>
              {responseMsg && <p style={{ marginTop: "10px", color: "green" }}>{responseMsg}</p>}
            </form>
          </div>
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faqs
