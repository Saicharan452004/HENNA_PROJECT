import { Component } from "react"
import arabic2 from "../../assets/arabic2.png"
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from "react-icons/md"
import {MdLocationOn} from "react-icons/md"
import "./index.css"

class ContactForm extends Component{
    state={
        name:"",
        email:"",
        phone:"",
        message:"",
        showSubmitError:false,
        errorMsg:""
    }
    submitForm=(event)=>{
        event.preventDefault()
    }

    render(){
        return(
            <div className="contact-form-section">
                <div className="contact-form-left-section">
                    <div className="contact-form-left-image-section">
                        <img src={arabic2} className="contact-form-left-image" alt="image-contact"/>
                    </div>
                    <div className="contact-form-left-description-section">
                        
                        <div className="contact-form-left-description-container">
                            <FaPhoneAlt className="contact-form-left-description-icon"/>
                            <p className="contact-form-left-description">123456789</p>
                        </div>

                        <div className="contact-form-left-description-container">
                            <FaPhoneAlt className="contact-form-left-description-icon"/>
                            <p className="contact-form-left-description">123456789</p>
                        </div>

                        <div className="contact-form-left-description-container">
                            <MdEmail className="contact-form-left-description-icon"/>
                            <p className="contact-form-left-description">emailaddress123@gmail.com</p>
                        </div>

                        <div className="contact-form-left-description-container">
                            <MdLocationOn className="contact-form-left-description-icon"/>
                            <p className="contact-form-left-description">37,Ayur Vigyan Nagar,New Delhi,India.</p>
                        </div>

                    </div>
                </div>

                <div className="contact-form-right-section">
                    <h1 className="contact-form-right-section-heading">Book Your Appointment</h1>
                    <form className="form-container" onSubmit={this.submitForm}>
                        <input type="text" className="input-field"  placeholder="Name"/>
                        <input type="text" className="input-field"  placeholder="Email"/>
                        <input type="tel" className="input-field" placeholder="Phone Number"/>
                        <input type="date" className="input-field-date"/>
                        <textarea rows={5} cols={40} placeholder="Message" className="input-area"/>
                        <button type="submit" className="input-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ContactForm