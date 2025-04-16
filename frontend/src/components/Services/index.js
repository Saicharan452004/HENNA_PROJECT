import Header1 from "../Header1"
import Header2 from "../Header2"
import ServiceItem from "../ServiceItem"
import Footer from "../Footer"
import group_mehendi from "../../assets/group_mehendi.png"
import contemporary_fusion from "../../assets/contemporary_fusion.png"
import arabic_moroccan from "../../assets/arabic_moroccan.png"
import bridal_package from "../../assets/bridal_package.png"
import rajasthani_mehendi from "../../assets/rajasthani_mehedni.png"
import western_mehendi from "../../assets/western_mehendi.png"
import "./index.css"

const serviceItems=[
    {
        image:group_mehendi,
        heading:"Group Mehendi Sessions",
        paragraph:"Celebrate togetherness with beautifully coordinated designs, perfect for friends and family gatherings."
    },
    {
        image:contemporary_fusion,
        heading:"Contemporory Fusion Styles",
        paragraph:"A creative blend of modern and traditional patterns, designed for a stylish, unique look."
    },
    {
        image:arabic_moroccan,
        heading:"Arabic Moroccan Designs",
        paragraph:"Bold, flowing designs inspired by Middle Eastern elegance and charm with graceful fine detailing."
    },
    {
        image:bridal_package,
        heading:"Bridal Mehendi Packages",
        paragraph:"Intricate and personalized artistry crafted specially for your most special day with love."
    },
    {
        image:rajasthani_mehendi,
        heading:"Rajasthani Mehendi Designs",
        paragraph:"Rich in detail and culture, capturing the essence of royal tradition and heritage beautifully."
    },
    {
        image:western_mehendi,
        heading:"Western Mehendi Designs",
        paragraph:"Minimalist and chic designs for a modern, global vibe with subtle elegant patterns."
    }
]

const Services=(props)=>{
    return(
        <div className="home-container">
            <Header1/>
            <Header2/>
            <div className="services-heading-section">
                <h1 className="services-heading">Our Mehendi Services</h1>
                <p className="services-paragraph">Discover the art and elegance we bring to every occasion</p>
            </div>
            <ul className="services-containers">
                {serviceItems.map(eachItem=>(
                    <ServiceItem key={eachItem.id} serviceDetails={eachItem}/>
                ))}
            </ul>
            <Footer/>
        </div>
    )

}
export default Services