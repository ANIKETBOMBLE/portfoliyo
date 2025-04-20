import { FaHtml5,FaCss3Alt ,FaJs,FaReact ,FaNodeJs,FaGithub ,  } from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiExpressvpn } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import { CgMenuMotion } from "react-icons/cg";
import React, { useState } from 'react'
import SocialMenu from './menu';

export default function Header() {
	
	
	
	
	
	
  return (
	<>
	
	
	<header className="flex justify-around   items-center  p-4 bg-white shadow-md ">
		<h1 className='font-bold p-4 text-2xl'>Hello..Coders!!</h1>
		<ul className='flex gap-15 underline'> 
	
			<li className='hover:black hover:font-semibold' id='/'>HOME</li>
			<li className='hover:black hover:font-semibold' id="/Skills" >PROJECTS</li>
			<li className='hover:black hover:font-semibold'id="/about">ABOUT ME</li>
		</ul> 
		
	<SocialMenu/>
		
	</header>
	
	
	</>
  )
}