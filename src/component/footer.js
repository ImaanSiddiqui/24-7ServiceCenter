import React from "react";
import { Link } from "react-scroll";
import "../style/footer.css"; // Make sure the styles match your navbar

const Footer = () => {
  return (
    <footer className="fixinnow-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Service Center</h2>
          <p>Your Trusted AC Repair & Home Appliance Service</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="home" smooth={true}> Home </Link></li>
            <li><Link to="about" smooth={true}> About Us </Link></li>
            <li><Link to="services" smooth={true}> Services </Link></li>
            <li><Link to="contact" smooth={true}> Contact Us </Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Eon IT Park Kharadi, Pune, India</p>
          <p>📞 +91 8446167886</p>
          <p>✉ servicecentre374@gmail.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook">FB</a>
            <a href="#" className="icon twitter">TW</a>
            <a href="#" className="icon instagram">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Developed by TechHowler Solution © {new Date().getFullYear()} Fixinnow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
