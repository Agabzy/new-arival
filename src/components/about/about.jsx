import React from "react";
import Earbud from "../../assets/earbud.png";
import { easeInOut, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import {fadeUp} from "../Services/Services"
const About = () => {
  return (
    <>
    <section className="font-poppins" id="about">

      <h2 className="font-poppins font-bold text-center pt-24 text-3xl ">About us</h2>

      <div className="container py-1 grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 gap-10">

       <div>
        <motion.img
        initial={{opacity:0, x:0,rotate: -180}}
        animate={{opacity:1, x:0, rotate:0}} 
        transition={{duration:0.8, delay: 0.2, ease: easeInOut}} src={Earbud} alt="" className="w-auto md:w-[400px]" />
       </div>

       <div className="flex flex-col justify-center">

        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">

        <motion.h1 variants={fadeUp(0.7)}
      initial="hidden"
      whileInView="show" className="text-3xl lg:text-4xl font-semibold font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.h1>

        <motion.p variants={fadeUp(0.9)}
      initial="hidden"
      whileInView="show">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis recusandae ipsum doloribus temporibus, tempore reprehenderit illum neque quasi a molestias, est magni rem qui, adipisci praesentium ex exercitationem ratione doloremque.
        </motion.p>

        <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 9999,
          followSpeed:0.5,
          scale:3,
          mixBlendMode: "difference",
        }}>
        <motion.button className="border-2 text-white px-6 py-2 rounded-md bg-primary hover:text-white">See more
        </motion.button>

        </UpdateFollower>


       </div>
       </div>
      </div>
    </section>
    </>
  )
};

export default About;
