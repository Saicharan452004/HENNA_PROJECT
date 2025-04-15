import {Component} from "react"
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import "./index.css"

const faqs = [
    {
      question: "Do You Offer Mehendi Services for All Occasions?",
      answer:
        "Yes, we provide mehendi services for all occasions including weddings, festivals, parties, and special events.",
    },
    {
      question: "Can I Choose My Own Mehendi Design?",
      answer:
        "Absolutely! You can choose from our design gallery or bring your own reference design. Customizations are welcome.",
    },
    {
      question: "How Long Does Mehendi Application Take?",
      answer:
        "It depends on the design and area. Simple designs take around 15–30 minutes, while bridal mehendi may take several hours.",
    },
    {
      question: "How Long Will the Mehendi Color Last?",
      answer:
        "Typically, the color lasts 7–10 days. Proper aftercare like avoiding water for the first 12 hours can help it stay longer.",
    },
    {
      question: "Do You Use Natural Mehendi?",
      answer:
        "Yes, we use 100% natural, chemical-free mehendi to ensure safety for all skin types.",
    },
    {
      question: "Do You Provide Home Services?",
      answer:
        "Yes, we offer home service and on-location bookings for weddings and events. Advance booking is recommended.",
    },
    {
        question: "How Much Do You Charge for Mehendi Services?",
        answer:
          "Our pricing depends on the design complexity and area to be covered. You can contact us for a custom quote or check our pricing page.",
    },
  ];

  
class Faq extends Component{
    state={
        openIndex:null
    }

    toggleFAQ = (index) => {
        this.setState((prevState) => ({
          openIndex: prevState.openIndex === index ? null : index
        }));
      };

    render(){
        const {openIndex}=this.state
        return(
            <div className="faqs-all-questions">
                {faqs.map((faq,index)=>(
                    <div className="faqs-question-answer">
                        <div className="faqs-question" key={index}>
                            <button onClick={() => this.toggleFAQ(index)} className="faqs-button">
                                {openIndex === index ? <FaArrowCircleUp className="faqs-icon"/> : <FaArrowCircleDown className="faqs-icon"/>}
                            </button>
                            <div className="faq-question">
                                {faq.question}
                            </div>
                        </div>
                        {openIndex === index && (
                            <div className="faqs-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>  
                ))}
            </div>
        )
    }
}
export default Faq