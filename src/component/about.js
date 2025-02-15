import React from "react";
import "../style/about.css";
import aboutImage from "../assets/logo.png"; // Add a relevant image
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Comfort Cooling System</h2>
          <p>
            At <strong>Comfort Cooling System</strong>, we specialize in providing top-quality repair 
            and maintenance services for your home appliances. With years of 
            experience and a team of expert technicians, we ensure that your AC, 
            refrigerator, washing machine, and dishwasher work perfectly.
          </p>
          <p>
            Our mission is to deliver **fast, reliable, and affordable repair 
            services** at your doorstep. We value customer satisfaction and aim 
            to build trust through **professional and transparent service**.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>5K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
          <Link to="contact" smooth={true} className="btn">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
