import { FaHtml5,FaCss3Alt ,FaJs,FaReact ,FaNodeJs,FaGithub ,  } from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiExpressvpn } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react'

export default function Header() {
	
	
	const [menu , setmenu] = useState(true);
	const showmenu = () => {setmenu(!menu);}

	
	
	
	
  return (
	<>
	
	
	<header className="flex justify-around   items-center  p-4 bg-white shadow-md ">
		<h1 className='font-bold p-4 text-2xl'>Hello..Coders!!</h1>
		<ul className='flex gap-15 underline'> 
	
			<li className='hover:black hover:font-semibold' id='#Home'>HOME</li>
			<li className='hover:black hover:font-semibold' id='#' >PROJECTS</li>
			<li className='hover:black hover:font-semibold'id='#About'>ABOUT ME</li>
		</ul> 
		
		
		
		
		<section className=" "><span className=' border-2 p-2 rounded-2xl hover:bg-black hover:text-white 'onClick={showmenu}></span>
		<span className={menu ? 'hidden' : ''} >
			<section className='flex gap-5 mt-10 absolute right-0 bg-white p-4 rounded-lg shadow-lg'>
			<span > <a href="https://github.com/ANIKETBOMBLE"> <FaGithub className='w-10 h-10 cursor-pointer' /></a> </span>
			<span> <a href="https://www.linkedin.com/in/aniket-bomble-5a5662301/"><CiLinkedin className='w-10 h-10'/></a></span>
			<span><a href="https://www.instagram.com/aniket_bomble1/"><IoLogoInstagram className='w-10 h-10' /></a></span>
			</section>
		</span>
		</section>
	</header>
	
	
	</>
  )
}