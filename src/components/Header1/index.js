import {FaPhoneAlt} from 'react-icons/fa'
import "./index.css"

const Header1=props=>{
    return(
        <nav className="nav-header1">
            <div className="nav-header1-content">
                <p className="nav-header1-para">Let Your Hands Tell a Story – Book Your Mehendi Today!</p>
            </div>
            <div className="nav-header1-phone">
                <FaPhoneAlt className="phone"/>
                <p className="nav-header1-para">123456789</p>
            </div>
        </nav>
    )
}
export default Header1