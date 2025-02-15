import React from "react";
import "../style/home.css";
import { Link } from "react-scroll";
import backgroundImage from "../assets/background.jpg"; // Make sure to add an image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay"></div>
      <div className="content">
        <h1>Reliable AC Repair & Maintenance Services</h1>
        <p>Expert technicians to keep your AC running smoothly. Fast, reliable, and affordable service.</p>
         <Link to= "contact"smooth={true} className="btn"> Get Service Now </Link>
      </div>
    </div>
  );
};

export default LandingPage;
