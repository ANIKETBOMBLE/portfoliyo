import React from 'react'
import { motion } from 'framer-motion';
import myiMage from './assest/IMG.jpg';
import { IconCloudDemo } from '../components/mage-ui/icon/icon-cloud.jsx';
import CanvasCursor from '../components/mage-ui/cursor-effects/canvas-cursor-effect.jsx';
import S from './S.jsx';
import A from './A.jsx';
import Footer from './compontus/Footer.jsx';
import P from './P.jsx';

export default function Home() {
  return (
    <>
       <CanvasCursor />
      <main className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-around px-6 py-12">
         <motion.section
          className="mt-10 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={myiMage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/10 hover:shadow-white/20 transition-all duration-500"
          />
        </motion.section>
        <motion.section
          className="flex flex-col items-center text-center gap-5 max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold tracking-tight">Hello..</h2>
          <p className="text-3xl font-semibold">I'M ANIKET BOMBLE</p>
          <p className="text-xl font-light">Full Stack Developer</p>
          <p className="text-base leading-relaxed text-gray-300">
            I am a passionate full-stack developer with expertise in creating
            dynamic and responsive web applications.
          </p>
        </motion.section>
        <div className="text-center font-semibold text-3xl">
                  <IconCloudDemo className="w-10 h-10"/>
          {/* <h2 className='mb-1'>Skills</h2> */}

        </div>
   
        {/* <motion.section
          className="mt-10 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={myiMage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/10 hover:shadow-white/20 transition-all duration-500"
          />
        </motion.section> */}
      </main>

      <section className="bg-black py-12 text-white">
        {/* <h2 className='text-center text-4xl font-bold'> Skills</h2> */}
       
       
      </section>

   

      <main className="bg-black">
          <S />
        <P />
      
        <A />
        <Footer />
      </main>
    </>
  );
}
