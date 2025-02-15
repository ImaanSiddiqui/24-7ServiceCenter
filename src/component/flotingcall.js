import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../style/flotingcall.css";

const FloatingCallButton = () => {
  return (
    <a href="tel:+918446167886" className="floating-call-btn">
      <FaPhoneAlt className="call-icon" />
    </a>
  );
};

export default FloatingCallButton;
