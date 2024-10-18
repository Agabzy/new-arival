import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#aa6d6b] pt-10 pb-6 text-white">
    <div className="container mx-auto px-5 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* <!-- First Column: Playing --> */}
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{delay:0.4, duration:0.8}} className="space-y-5">
          <h1 className="text-xl font-bold">Playing</h1>
          <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam provident quasi suscipit molestiae quisquam iure accusantium doloremque illum labore.</p>
          <div>
            <p className="flex items-center gap-2">
              <FaPhone />
              +1 (234) 456-7890
            </p>
            <p className="flex items-center gap-2">
              <FaMapLocation />
              Gidan-mangorro, Abuja
            </p>
          </div>
        </motion.div>
        
        {/* <!-- Second Column: Quick Links --> */}
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{delay:0.6, duration:0.8}} className="space-y-5">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-1">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#booking">Bookings</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </motion.div>
        {/* <!-- Third Column: Follow Us --> */}
        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{delay:0.8, duration:0.8}} className="space-y-5">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div className="flex gap-4">
            <FaFacebook className="text-xl hover:scale-105 duration-300" />
            <FaInstagram className="text-xl hover:scale-105 duration-300" />
            <FaTelegram className="text-xl hover:scale-105 duration-300" />
            <FaGoogle className="text-xl hover:scale-105 duration-300" />
          </div>
          <div className="space-y-1">
            <p>Payment Method</p>
            <img src={cards} alt="Payment Methods" className="w-[80%] md:w-[60%]" />
          </div>
        </motion.div>

      </div>

      {/* <!-- Bottom Text --> */}
      <p className="text-white text-center mt-10 border-t-2 pt-4">
        © 2024. All Rights Reserved
      </p>
    </div>
  </footer>
  </>
  )
};

export default Footer;
