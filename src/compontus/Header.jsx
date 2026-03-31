import { motion } from "framer-motion";
import React, { useState } from 'react'
import SocialMenu from './menu';
import { Link } from 'react-router';
import { CgMenuMotion } from "react-icons/cg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-2 text-white">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-extrabold text-xl tracking-wider cursor-pointer text-white hover:text-blue-400 transition duration-300"
        >
          ANIKETT
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
          {["/", "/skills", "/project", "/about"].map((path, i) => {
            const labels = ["HOME", "SKILLS", "PROJECT", "ABOUT ME"];
            return (
              <li key={i} className="relative group cursor-pointer">
                <Link to={path}>
                  <span className="group-hover:text-blue-400 transition duration-300">
                    {labels[i]}
                  </span>
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SocialMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgMenuMotion />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-5 flex flex-col gap-4 text-center text-sm font-medium"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>SKILLS</Link>
          <Link to="/project" onClick={() => setIsOpen(false)}>PROJECT</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT ME</Link>

          <div className="pt-3 border-t border-white/10">
            <SocialMenu />
          </div>
        </motion.div>
      )}
    </header>
  )
}