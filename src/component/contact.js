import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../style/contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const products = [
    "Air Conditioner",
    "Fridge ",
    "Washing Machine",
    "Dish Washer",
    "Other",
  ];

  const validateForm = () => {
    let newErrors = {};
    const phoneRegex = /^[6-9]\d{9}$/; // Valid 10-digit Indian numbers

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.match(phoneRegex)) newErrors.phone = "Invalid phone number";
    if (!formData.product) newErrors.product = "Please select a product/service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const form = new FormData();
    form.append("access_key", "3d3cdf15-22d6-418a-b5bc-16ae64611007");
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Thank you! Your message has been sent.");
      setFormData({ name: "", phone: "", product: "", message: "" });
      setErrors({});
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Reach out to us for any inquiries or service requests.</p>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Your Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <select className="selector" name="product" value={formData.product} onChange={handleChange}>
            <option value="">Select a Service</option>
            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
          {errors.product && <span className="error">{errors.product}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>Eon IT Park Kharadi, Pune, India</p>
        </div>
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <a href="tel:+919270950997">+91 9270950997</a>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <a href="mailto:info@fixinnow.com">servicecentre374@gmail.com</a>
        </div>
      </div>

      {/* WhatsApp and Call Buttons */}
      <div className="contact-buttons">
        <a
          href="https://wa.me/919270950997"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" /> Chat on WhatsApp
        </a>
        <a href="tel:+919270950997" className="call-btn">
          <FaPhoneAlt className="icon" /> Call Now
        </a>
      </div>
    </div>
  );
};

export default Contact;
