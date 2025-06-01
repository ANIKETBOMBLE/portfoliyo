import { FaHtml5,FaCss3Alt ,FaJs,FaReact ,FaNodeJs,FaGithub ,  } from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiExpressvpn } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import { CgMenuMotion } from "react-icons/cg";
import React, { useState } from 'react'
import SocialMenu from './menu';
import { Link } from 'react-router'

export default function Header() {
	
	
	
	
	
	
  return (
	<>
	
	
	<header className="flex justify-around   items-center  p-4 bg-black text-white shadow-md ">
		<h1 className='font-bold p-4 text-2xl'>ANIKETT</h1>
		<ul className='flex gap-15 underline'> 
	
			<li className='hover:black hover:font-semibold' ><Link to="/">HOME</Link></li>
			<li className='hover:black hover:font-semibold' id="/skills" ><Link to="/skills"> SKILLS</Link></li>
			<li className='hover:black hover:font-semibold'> <Link to="/Project">PROJECT</Link></li>
			<li className='hover:black hover:font-semibold'> <Link to="/About">ABOUT ME </Link></li>
		</ul> 
		
	<SocialMenu/>
		
	</header>
	
	
	</>
  )
}