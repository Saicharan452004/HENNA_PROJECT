import "./index.css"

const ServiceItem=(props)=>{
    const {serviceDetails}=props
    const {image,heading,paragraph}=serviceDetails
    return(
        <li className="services-container">
            <img src={image} alt="service-image" className="services-container-image"/>
            <h1 className="services-container-heading">{heading}</h1>
            <p className="services-container-paragraph">{paragraph}</p>
        </li>
    )
}
export default ServiceItem