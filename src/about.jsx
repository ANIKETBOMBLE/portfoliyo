import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';

export default function About() {
 {
	const sendEmail = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.elements[0].value;
		const email = form.elements[1].value;
		const message = form.elements[2].value;

		if (!name || !email || !message) {
			alert("Please fill in all fields.");
			return;
		}
		if (!/\S+@\S+\.\S+/.test(email)) {
			alert("Please enter a valid email address.");
			return;
		}
		if (message.length < 10) {
			alert("Message must be at least 10 characters long.");
			return;
		}
		if (message.length > 500) {
			alert("Message must be less than 500 characters long.");
			return;
		}
		if (message.toLowerCase().includes("spam")) {
			alert("Message contains spam.");
			return;
		}

		const data = { name, email, message };
		localStorage.setItem("formData", JSON.stringify(data));
		alert("Email sent successfully!");
		form.reset();
	};

	return (
		<div className="main-div h-screen w-full flex flex-col bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-100 p-5">
			<section className="text-center text-3xl font-semibold text-gray-800 mt-5">ABOUT ME</section>

			<div className="main flex flex-col lg:flex-row justify-center items-center mt-10 gap-10">

				
				<motion.div
					className="left-div flex flex-col w-full max-w-md border p-10 bg-white text-black rounded-lg shadow-lg"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-xl font-medium mb-6">Send A Message</h1>
					<form className="flex flex-col gap-5" onSubmit={sendEmail}>
						<input type="text" placeholder="Name" className="border-2 border-black rounded-md p-2" />
						<input type="email" placeholder="Email" className="border-2 border-black rounded-md p-2" />
						<textarea placeholder="Message" className="border-2 border-black rounded-md p-2" rows="4"></textarea>
						<button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 transition duration-300">
							Send
						</button>
					</form>
				</motion.div>

				
				<motion.div
					className="right-div flex flex-col w-full max-w-md p-10 text-xl text-black bg-white rounded-lg shadow-lg"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h2 className="mb-6 font-medium text-lg">GET IN TOUCH</h2>
					<p>
						Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
						Simply fill out the form and send me a message.
					</p>

					<section className="flex gap-5 mt-10 text-gray-700">
						<a href="https://github.com/ANIKETBOMBLE" target="_blank" rel="noopener noreferrer">
							<FaGithub className="w-10 h-10 hover:text-black transition-colors duration-300 cursor-pointer" />
						</a>
						<a href="https://www.linkedin.com/in/aniket-bomble-5a5662301/" target="_blank" rel="noopener noreferrer">
							<CiLinkedin className="w-10 h-10 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
						</a>
						<a href="https://www.instagram.com/aniket_bomble1/" target="_blank" rel="noopener noreferrer">
							<IoLogoInstagram className="w-10 h-10 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
						</a>
					</section>
				</motion.div>
			</div>
		</div>
	);
}
}
