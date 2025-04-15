import Footer from "../Footer"
import Header1 from "../Header1"
import Header2 from "../Header2"
import { FaPhoneAlt } from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {MdLocationOn} from "react-icons/md"
import "./index.css"

const ContactUs=(props)=>{

    const submitForm=(event)=>{
        event.preventDefault()
    }

    return(
        <div className="home-container">
            <Header1/>
            <Header2/>
            <div className="contact-us-container">
                <div className="contact-us-left-container">
                    <h1 className="contact-us-left-heading">Contact Info</h1>
                    
                    <div className="contact-us-left-description">
                        <FaPhoneAlt className="contact-us-left-icon"/>
                        <p className="contact-us-left-paragraph">123456789<span className="contact-us-left-span">987654321</span></p>
                    </div>
                    
                    <div className="contact-us-left-description">
                        <MdEmail className="contact-us-left-icon"/>
                        <p className="contact-us-left-paragraph">emailaddress123@gmail.com</p>
                    </div>

                    <div className="contact-us-left-description">
                        <MdLocationOn className="contact-us-left-icon"/>
                        <p className="contact-us-left-paragraph">37,Ayur Vigyan Nagar,New Delhi,India.</p>
                    </div>

                </div>

                <div className="contact-us-right-section">
                    <h1 className="contact-us-right-section-heading">Get In Touch</h1>
                    <form className="contact-us-form-container" onSubmit={submitForm}>
                        <input type="text" className="input-field-contact-us"  placeholder="Name"/>
                        <input type="text" className="input-field-contact-us"  placeholder="Email"/>
                        <input type="text" className="input-field-contact-us" placeholder="Subject"/>
                        <textarea rows={5} cols={40} placeholder="Message" className="input-area-contact-us"/>
                        <button type="submit" className="contact-us-input-button">Submit</button>
                    </form>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default ContactUs