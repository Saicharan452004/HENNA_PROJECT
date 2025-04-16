import {HiViewGrid} from "react-icons/hi"
import {FaBookmark} from "react-icons/fa"
import {FaUser} from "react-icons/fa"
import {HiDocumentText} from "react-icons/hi"
import "./index.css"

const ChooseUs=()=>{
    return(
        <div className="choose-section">
            <h1 className="choose-heading">Why Choose Us?</h1>
            <p className="choose-paragraph">Mehendi Moments,Forever Etched in Beauty</p>
            <div className="choose-section-containers">

                <div className="choose-section-container">
                    <div className="choose-section-icon-container">
                        <HiViewGrid className="choose-section-icon"/>
                    </div>
                    <h1 className="choose-section-container-heading">Booking Facilities</h1>
                    <p className="choose-section-container-paragraph">Keeping up with the current trends and continously learning new designs.</p>
                </div>

                <div className="choose-section-container">
                    <div className="choose-section-icon-container">
                        <FaBookmark className="choose-section-icon"/>
                    </div>
                    <h1 className="choose-section-container-heading">Designs Updation</h1>
                    <p className="choose-section-container-paragraph">Familiarity with a wide range of mehndi designs, both traditional.</p>
                </div>

                <div className="choose-section-container">
                    <div className="choose-section-icon-container">
                        <FaUser className="choose-section-icon"/>
                    </div>
                    <h1 className="choose-section-container-heading">Expert Artists</h1>
                    <p className="choose-section-container-paragraph">Start the smooth arrangement now, the artist continues with caution.</p>
                </div>

                <div className="choose-section-container">
                    <div className="choose-section-icon-container">
                        <HiDocumentText className="choose-section-icon"/>
                    </div>
                    <h1 className="choose-section-container-heading">Certification</h1>
                    <p className="choose-section-container-paragraph">Maintaining cleanliness and using safe , high quality Mehendi Designs.</p>
                </div>
                
            </div>
        </div>
    )
}
export default ChooseUs