import React, { useState } from "react";
import { Link } from "react-scroll";
import "../style/navbar.css";
import logo from "../assets/logo1.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src={logo} alt="Fixinnow Logo" />
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link 
              to="services" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-50} 
              className="book-now"
              onClick={() => setMenuOpen(false)}
            >
              Service Now
            </Link>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
