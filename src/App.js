import React from "react";
import Navbar from "./component/navbar"; // Import Navbar
import LandingPage from "./component/home";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";
import Footer from "./component/footer";
import FloatingCallButton from "./component/flotingcall";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Navbar /> 
      <div className="home">{/* Navbar Component */}
      <LandingPage/>
      </div>
      <div className="services">
      <Services/>
      </div>
      <div className="about">
      <About/>
      </div>
      <div className="contact">
      <Contact/>
      </div>
      <FloatingCallButton/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
