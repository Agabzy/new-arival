import React from "react";
import Headphone from "../../assets/headphone.png";
import Headset4 from "../../assets/headset4.png";
import headset5 from "../../assets/headset5.png";
import {FaWhatsapp} from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) =>{
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition:{
        duration:0.5,
        delay: delay,
        ease: easeInOut
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition:{
        duration:0.2,
        delay: delay,
        ease: easeInOut
      }
    }

  }
}


function Hero(){

  const hero = [
    {
          id:1,
          image: Headphone,
          title:"Experience Pure Audio Bliss",
          subtitle: "Indulge in crystal-clear audio with our premium haedphones",
          price: "$30",
          modal:"Book now",
          bgColor: "#8b5958",
        },
    {
          id:2,
          image: Headset4,
          title:"Upgrade Your Mobile Experience",
          subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sapiente.",
          price: "$35",
          modal:"Book now",
          bgColor: "rgb(121, 184, 205)",
        },
    {
          id:3,
          image: headset5,
          title:"Upgrade Your Mobile Experience",
          subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sapiente.",
          price: "$28",
          modal:"Book now",
          bgColor: "rgb(242, 242, 242)",
        },
  ]

  const [activeData,setActiveData] = React.useState(hero[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
  <>
  <section className="bg-brandDark text-white font-varela pt-20" id="home">
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
  
  <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[400px] text-white relative">

    <div className="space-y-5 text-center md:text-left">
       
      <AnimatePresence mode="wait">
      <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 9999,
        followSpeed: 0.5,
        rotate: -720,
        mixBlendMode: "difference",
        scale: 6,
      }}>
      
      <motion.h1 key={activeData.id} variants={fadeUp(0.2)} initial="hidden" animate="show" exit="exit" className="text-3xl lg:text-4xl font-bold font-varela">{activeData.title}</motion.h1>
      </UpdateFollower>
      
      </AnimatePresence>

        <AnimatePresence mode="wait">
        <motion.p key={activeData.id} variants={fadeUp(0.2)} initial="hidden" animate="show" exit="exit" className="text-sm leading-loose text-white/80">{activeData.subtitle}</motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <UpdateFollower
          mouseOptions={{
            backgroundColor: activeData.bgColor,
            zIndex: 9999,
            followSpeed: 0.5,
            rotate: -720,
            scale: 3,
            backgroundElement: <div>
              <img src={activeData.image} alt="" />
            </div>
          }}>
            <motion.button key={activeData.id} variants={fadeUp(0.3)} initial="hidden" animate="show"  exit="exit" style={{
            backgroundColor: activeData.bgColor}} className="px-4 py-1 inline-block font-normal rounded-sm text-black"><a href="#booking">{activeData.modal}</a>
            </motion.button>
          </UpdateFollower>
        </AnimatePresence>
      


      <div className="flex items-center justify-center md:justify-start gap-3 !mt-24">
        <div className="w-20 h-[1px] bg-white"></div>
        <p className="uppercase text-sm">Top products for you</p>
        <div className="w-20 h-[1px] bg-white"></div>
      </div>

     {/* Headphone list switcher */}
      <div className="grid grid-cols-3 gap-10">
        {hero.map((item) =>{
          return(
            <UpdateFollower
            mouseOptions={{
              backgroundColor: item.bgColor,
              zIndex:9999,
              followSpeed: 0.5,
              scale:3,
              text: "View details",
              textColor: "black",
              textFontSize: "3px",

            }}
            >
               <div key={item.id} onClick={() => handleActiveData(item)} className="grid grid-cols-2 place-items-center cursor-pointer">
            <div key={item.id}>
              <img src={item.image} alt={item.title} className="w-[50px]" />
            </div>
            <div className="space-y-2">
             <p className="text-base font-bold">{item.price}</p>
             <p className="text-sm font-normal text-nowrap">{item.modal}</p>
            </div>
          </div>
            </UpdateFollower>
         
          )
        })}
       
      </div>
   </div>
  </div>
   
   <div className="flex flex-col justify-end items-center">
    <AnimatePresence mode="wait">
    <motion.img
     key={activeData.id} 
     initial={{opacity: 0, scale:0.5, y:100}} 
     animate={{opacity:1, scale:1, y:0}} 
     transition={{duration:0.5, delay:0.2}} 
     exit={{opacity: 0, scale:0.5, y:100, 
      transition:{
      duration: 0.2,
     }
    }}
     src={activeData.image} alt="" className="w-[300px] md:w-[400px] xl:w-[550px]" />
    </AnimatePresence>
   </div>

   <div className="text-3xl text-orange-500 ml-2 fixed bottom-0 left-0 hover:rotate-[360deg] duration-500 z-[999999] mix-blend-difference">
    <a href="https://wa.me/07014243655"><FaWhatsapp /></a>
   </div>

 </div>
  </section>
  </>
  );
};

export default Hero;
