
import React from 'react'
import { FaHtml5,FaCss3Alt ,FaJs,FaReact ,FaNodeJs,FaGithub ,  } from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiExpressvpn } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import myiMage from './assest/IMG.jpg';
import { CgMenuMotion } from "react-icons/cg";
import S from './S.jsx';
import A from './A.jsx';
import Footer from './compontus/Footer.jsx';
import P from './P.jsx';





export default function Home() {

  return (
	<> 
    <main className="h-screen flex justify-around items-center border bg-black text-white">
    
      <motion.section
        className="flex flex-col items-center text-center gap-6 w-[400px] p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold">Hello..</h2>
        <p className="text-3xl font-roboto">I'M ANIKET BOMBLE</p>
        <p className="text-xl font-light tracking-wide">Full Stack Developer</p>
		<p className="text-lg font-light">
		  I am a passionate full-stack developer with expertise in creating
		  dynamic and responsive web applications.</p>
      </motion.section>

 
      <motion.section
        className="right-side"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="w-80 h-80 object-cover rounded-full shadow-2xl transition-all duration-700"
		  src ={myiMage}
		  
alt='Profile' />
        {/* //   src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"     alt="Profile" */}
</motion.section></main>

  <main><P /></main>
	<main><S /></main>
	<main><A  /></main>
  <main><Footer /></main>
	
	</>
  )
	}
