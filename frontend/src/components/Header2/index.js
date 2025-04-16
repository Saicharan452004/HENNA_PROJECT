import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo_2 from "../../assets/logo_2.png";
import joohi_logo from "../../assets/joohi_logo.png"
import { FaBars, FaTimes } from 'react-icons/fa';
import "./index.css";

const Header2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav-header2">
            <div className="nav-header2-content">
                <div className="nav-header2-content-items">
                    <Link to="/">
                        <img 
                            src={joohi_logo}
                            alt="logo"
                            className="nav-header2-logo"
                        />
                    </Link>
                    
                    <div className="mobile-menu-toggle" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
                    </div>
                    
                    <ul className={`nav-header2-menu ${menuOpen ? 'active' : ''}`}>
                        <li className="nav-header2-menu-item">
                            <Link to="/" className="nav-header2-menu-item-link nav-header2-menu-item-button" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-header2-menu-item">
                            <Link to="/services" className="nav-header2-menu-item-link nav-header2-menu-item-button" onClick={() => setMenuOpen(false)}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-header2-menu-item">
                            <Link to="/gallery" className="nav-header2-menu-item-link nav-header2-menu-item-button" onClick={() => setMenuOpen(false)}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-header2-menu-item">
                            <Link to="/faqs" className="nav-header2-menu-item-link nav-header2-menu-item-button" onClick={() => setMenuOpen(false)}>
                                Faqs
                            </Link>
                        </li>
                        <li className="nav-header2-menu-item">
                            <Link to="/contactus" className="nav-header2-menu-item-link nav-header2-menu-item-button" onClick={() => setMenuOpen(false)}>
                                Contact us
                            </Link>
                        </li>
                        <li className="nav-header2-menu-item logo-2-container">
                            <img src={logo_2} className="logo_2" alt="logo2"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header2;