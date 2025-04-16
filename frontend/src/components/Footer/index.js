import logo_2 from "../../assets/logo_2.png"
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo">
            <img
              src={logo_2}
              alt="logo"
              className="logo-icon"
            />
            <p className="logo-name">Art By Joohi</p>
          </div>
          <div className="icons-container">
            <div className="icon">
                <FaFacebookF className="icon-color"/>
            </div>
            <div className="icon">
                <FaInstagram className="icon-color"/>
            </div>
            <div className="icon">
                <FaTwitter className="icon-color"/>
            </div>
          </div>
          <p className="address">
            37, Ayur Vigyan Nagar, New Delhi, India.
          </p>
        </div>

        
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Press releases</li>
            <li>Gift a smile</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact With us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li>100% purchase protection</li>
            <li>Your account</li>
            <li>Return centre</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
