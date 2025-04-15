import { FaSmile } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import { FaBriefcase } from 'react-icons/fa'
import about from "../../assets/about.png"
import "./index.css"

const About=()=>{
    return(
        <div className="about-page-full">
            <h1 className="about-page-heading">ABOUT US</h1>   
            <div className="about-page">
                <div className="about-page-image-container">
                    <img src={about} className="about-page-image" alt="about"/>
                </div>
                <div className="about-page-description-container">
                    <h1 className="about-page-description-heading">I am passionate artist dedicated to bringing the timeless beauty of Mehendi designs to life. Blending tradition with creativity, our designs celebrate every moment with grace and elegance.</h1>
                    <div className="about-page-boxes-container">
                        <div className="box">
                            <FaSmile className='box-logo'/>
                            <div className='box-description'>
                                <h1 className='box-description-heading'>100</h1>
                                <p className='box-description-paragraph'>Happy Clients</p>
                            </div>
                        </div>
                        <div className="box">
                            <HiBadgeCheck className='box-logo'/>
                            <div className='box-description'>
                                <h1 className='box-description-heading'>100%</h1>
                                <p className='box-description-paragraph'>Good Service</p>
                            </div>
                        </div>
                        <div className="box">
                            <FaBriefcase className='box-logo'/>
                            <div className='box-description'>
                                <h1 className='box-description-heading'>3+</h1>
                                <p className='box-description-paragraph'>Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About