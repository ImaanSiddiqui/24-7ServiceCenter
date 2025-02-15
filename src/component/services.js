import React from "react";
import "../style/Service.css";
import acService from "../assets/acService.jpg"; 
import fridgeService from "../assets/FridgeService.jpg";
import washingMachine from "../assets/washingMachine.png";
import dishwasher from "../assets/Dishwasher.jpg";

const services = [
  { id: 1, name: "AC Repair & Service", image: acService, desc: "Expert AC maintenance and repair services." },
  { id: 2, name: "Fridge Repair", image: fridgeService, desc: "Fast and reliable fridge repair services." },
  { id: 3, name: "Washing Machine Repair", image: washingMachine, desc: "Get your washing machine fixed with ease." },
  { id: 4, name: "Dishwasher Repair", image: dishwasher, desc: "Professional dishwasher servicing at your doorstep." }
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
