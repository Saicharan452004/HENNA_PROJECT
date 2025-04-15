import Header1 from "../Header1";
import Header2 from "../Header2";
import Footer from "../Footer";
import Faq from "../Faq"
import "./index.css"

const Faqs=(props)=>{
    const submitForm=(event)=>{
        event.preventDefault()
    }
    return(
        <div className="home-container">
            <Header1/>
            <Header2/>
            <div className="faqs-section">
                <h1 className="faqs-section-heading">Frequently Asked Questions</h1>    
                <div className="faqs-containers">
                <div className="faqs-section-container-left">
                    <h1 className="contact-form-right-section-heading">Make Your Questions</h1>
                    <form className="form-container" onSubmit={submitForm}>
                        <input type="text" className="input-field"  placeholder="Your Name"/>
                        <input type="text" className="input-field"  placeholder="Your Email"/>
                        <input type="text" className="input-field" placeholder="Your Subject"/>
                        <textarea rows={5} cols={40} placeholder="Your Message" className="input-area"/>
                        <button type="submit" className="input-button">Submit</button>
                    </form>
                </div>
                <Faq/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Faqs