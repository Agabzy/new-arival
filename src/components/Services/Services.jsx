import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import Art from "../../assets/art-and-design.png";
import Chat from "../../assets/chat.png";
import Recycle from "../../assets/recycle-symbol.png";
import Tool from "../../assets/tools.png";
// import { delay } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";


 export const fadeUp = (delay) =>{
  return {
    hidden: {
      opacity: 0,
      y: 100,
     
    },
    show: {
      opacity: 1,
      y: 0,
      transition:{
        duration:0.5,
        delay: delay,
      }
    },

  }
}

 export const servicesData =[
  {
    id: 1,
    title:"Product Customization",
    icon: Art,
    description: "Unleash Your Creativity: Transform your accessories with our unique customization options. Personalize your gear to reflect your style and make it truly yours.",
    delay:0.5,
  },
  {
    id: 2,
    title:"Repair Services",
    icon: Tool,
    description: "Don’t let a cracked screen or malfunctioning accessory hold you back. Our expert repair services bring your devices back to life, ensuring they work like new!",
    delay:0.8,
  },
  {
    id: 3,
    title:"Installation Services",
    icon: Icon2,
    description: "Sit back and relax as our professionals take care of the setup. Enjoy hassle-free installation for your accessories, ensuring optimal performance and peace of mind.",
    delay:1.1,
  },
  {
    id: 4,
    title:"Trade-in",
    icon: Recycle,
    description: "Trade in your old accessories for exclusive discounts on the latest gear. Embrace innovation while getting rewarded for your loyalty!",
    delay:1.1,
  },
  {
    id: 5,
    title:"Warranty and Return policies",
    icon: Icon1,
    description: "Shop with confidence! Our comprehensive warranty and flexible return policies protect your investment, allowing you to enjoy your accessories worry-free.",
    delay:1.1,
  },
  {
    id: 6,
    title:"Customer Support",
    icon: Chat,
    description: "Our dedicated customer support team is just a call or click away! Whether you need assistance with product setup, troubleshooting, or advice on the best accessory, we’re here to ensure your experience is seamless and satisfying.",
    delay:1.1,
  }
]
function Services(){
  return(
   <>
   <section className="bg-gray-100 font-poppins py-8" id="services">
    <div className="container py-14">
      <motion.h1 variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show" className="text-3xl font-bold text-center pb-10">Services</motion.h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
      {servicesData.map((data) =>(
        <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 9999,
          followSpeed:0.5,
          scale:3,
          rotate: 720,
          mixBlendMode: "darken",
          backgroundElement:(
            <motion.div>
              <img src={data.icon} />
            </motion.div>
          )
        }}>
          <motion.div  variants={fadeUp(data.delay)} initial="hidden" whileInView="show" className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white h-96">
            <img src={data.icon} alt="" className="w-[100px] mb-4" />
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-center text-md font-light text-black/90">{data.description}</p>
            </div>
          </motion.div>
        </UpdateFollower>
      ))}
    </div>
    </div>
   </section>
   </>
  ) 
};

export default Services;
