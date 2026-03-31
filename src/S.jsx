import React from 'react'
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function S() {

  const skills = [
    { icon: <FaHtml5 />, label: 'HTML', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, label: 'CSS', color: 'text-blue-500' },
    { icon: <SiJavascript />, label: 'JavaScript', color: 'text-yellow-400' },
    { icon: <FaReact />, label: 'React', color: 'text-cyan-400' },
    { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-500' },
    { icon: <SiExpress />, label: 'Express.js', color: 'text-gray-300' },
    { icon: <SiMongodb />, label: 'MongoDB', color: 'text-green-400' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-sky-400' },
    { icon: <FaGithub />, label: 'GitHub', color: 'text-white' },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <motion.h2
        className="text-center text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)"
            }}
          >
            <div className={`text-4xl ${skill.color}`}>
              {skill.icon}
            </div>
            <p>{skill.label}</p>
          </motion.div>
        ))}

      </div>

    </main>
  );
}