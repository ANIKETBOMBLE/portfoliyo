
import React from 'react'
import { FaHtml5,FaCss3Alt ,FaJs,FaReact ,FaNodeJs,FaGithub ,  } from "react-icons/fa";
import { SiTailwindcss , SiMongodb , SiExpressvpn } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
	const sendEmail = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
		alert("Email sent successfully!");
		form.reset();
		
	}
	
	
	
	
  return (
	<>
	
	


 
    <main className="h-screen flex justify-around items-center border bg-white">
      {/* Animated Text Section */}
      <motion.section
        className="flex flex-col items-center text-center gap-6 w-[400px] p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold">Hello..</h2>
        <p className="text-3xl font-roboto">I'M ANIKET BOMBLE</p>
        <p className="text-xl font-light tracking-wide">Full Stack Developer</p>
      </motion.section>

      {/* Animated Image Section */}
      <motion.section
        className="right-side"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="w-80 h-80 object-cover rounded-full shadow-2xl transition-all duration-700"
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
        />
      </motion.section>
    </main>

	<main className='h-screen border bg-blue-950'>
		<section  className='text-center text-4xl mt-10  hover:underline font-light text-white'>PROJECTS</section>
		<section className='flex justify-center items-center mt-10 gap-5'>
			<div className='w-80 h-80 bg-slate-300 rounded-lg hover:bg-slate-400 hover:scale-110 hover:transition-all 400ms'></div>
			<div className='w-80 h-80 bg-slate-300 rounded-lg hover:bg-slate-400 hover:scale-110 hover:transition-all 400ms'></div>
			<div className='w-80 h-80 bg-slate-300 rounded-lg hover:bg-slate-400 hover:scale-110 hover:transition-all 400ms'></div>
	</section>
	</main>
	<main className='h-100 border'>
		<section className='text-center text-4xl mt-10 hover:underline font-light'>SKILLS</section>
		<section className='flex justify-center items-center place-items-center mt-10 gap-10 flex-wrap '>
			<p className='text-center text-2xl mt-10 place-items-center '><FaHtml5 /> HTML</p>
			<p className='text-center text-2xl mt-10 place-items-center'><FaCss3Alt /> CSS</p>
			<p className='text-center text-2xl mt-10 place-items-center '><FaJs /> JavaScript</p>
			<p className='text-center text-2xl mt-10 place-items-center'><FaReact /> React</p>
			<p className='text-center text-2xl mt-10 place-items-center'><FaNodeJs />  Node.js</p>
			<p className='text-center text-2xl mt-10 place-items-center'><SiExpressvpn /> Express.js</p>
			<p className='text-center text-2xl mt-10 place-items-center'><SiMongodb /> MongoDB</p>
			<p className='text-center text-2xl mt-10 place-items-center'><SiTailwindcss /> Tailwind CSS</p>
			<p className='text-center text-2xl mt-10 place-items-center'><FaGithub /> GitHub</p>
		</section>
	</main>
	
		<div className="main-div  h-screen w-full  flex flex-col flex-nowrap   bg-slate-300">
		<section className='text-center text-3xl  m-5 '>ABOUT ME</section>
		<div className="main flex flex-row justify-center items-center mt-30 gap-10">
		<div className="left-div flex flex-col w-100 h-100  border p-10 bg-white text-black rounded-lg ">
			<h1 className='text-xl mb-10'>Send A Message</h1>
			<form className="flex flex-col gap-5" onSubmit={sendEmail}>
				<input type="text" placeholder="Name" className="border-2 border-black rounded-md p-2" />
				<input type="email" placeholder="Email" className="border-2 border-black rounded-md p-2" />
				<textarea placeholder="Message" className="border-2 border-black rounded-md p-2"></textarea>
				<button type="submit" className="bg-blue-500 text-white rounded-md p-2">Send</button>
			</form>
		</div>
		<div className="right-div flex  flex-col w-100 h-100 p-10 text-xl text-black bg-white rounded-lg">
			<h2 className='mb-10'>GET IN TOUCH</h2>
			<p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
			Simply fill the from and send me an email.</p>
			<section className='flex gap-5 mt-10'>
				<span > <a href="https://github.com/ANIKETBOMBLE"> <FaGithub className='w-10 h-10 cursor-pointer' /></a> </span>
				<span> <a href="https://www.linkedin.com/in/aniket-bomble-5a5662301/"><CiLinkedin className='w-10 h-10'/></a></span>
				<span><a href="https://www.instagram.com/aniket_bomble1/"><IoLogoInstagram className='w-10 h-10' /></a></span>
			</section>
			
			
		</div>
		</div>
		
		</div>
		
	
	
	
	
	</>
  )
	}
