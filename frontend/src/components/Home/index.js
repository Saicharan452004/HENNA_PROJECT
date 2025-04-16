import Header1 from "../Header1"
import Header2 from "../Header2"
import Carousel from "../Carousel"
import About from "../About"
import ChooseUs from "../ChooseUs"
import ChoosePlan from '../ChoosePlan'
import Testimonial from "../Testimonial"
import ContactForm from "../ContactForm"
import Footer from "../Footer"
import "./index.css"

const Home=()=>{
    console.log("Home rendered")
    return(
    <div className="home-container">
    <Header1/>
    <Header2/>
    <Carousel/>
    <About/>
    <ChooseUs/>
    <ChoosePlan/>
    <Testimonial/>
    <ContactForm/>
    <Footer/>
    </div>
    );
}
export default Home