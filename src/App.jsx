import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/about2/about";
import AboutText from "./components/about/abouttext";
import Contact from "./components/contact/contact";
import Booking from "./components/booking/booking";
import Blogs from "./components/booking/booking";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/testimonial/testimonial";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { data } from "autoprefixer";


const App = () => {

  
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        
       
        
        {/* <Blogs /> */}
        
        <Services />
        <About />
        {/* <AboutText /> */}
        <Testimonial />
        <Contact />
        <Booking />
        <Footer />
      </UpdateFollower>
      
    </main>
  );
};

export default App;
