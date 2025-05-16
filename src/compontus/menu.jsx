import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuMotion } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';

const SocialMenu = () => {
  const [menu, setMenu] = useState(true);
  const showmenu = () => setMenu(!menu);

  return (
    <section className="relative">
      <motion.span
        className="rounded-2xl cursor-pointer p-2 transition-colors hover:scale-100"
        onClick={showmenu}
        whileHover={{ scale: 1.1 }}
      >
        <CgMenuMotion className="w-12 h-12" />
      </motion.span>

      <AnimatePresence>
        {!menu && (
          <motion.section
            className="flex gap-5 mt-10 absolute right-20  p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span whileHover={{ scale: 1.2 }}>
              <a href="https://github.com/ANIKETBOMBLE" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-10 h-10 text-gray-700 hover:text-gray-400 transition-colors duration-200" />
              </a>
            </motion.span>

            <motion.span whileHover={{ scale: 1.2 }}>
              <a href="https://www.linkedin.com/in/aniket-bomble-5a5662301/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="w-10 h-10 text-blue-600 hover:text-blue-800 transition-colors duration-200" />
              </a>
            </motion.span>

            <motion.span whileHover={{ scale: 1.2 }}>
              <a href="https://www.instagram.com/aniket_bomble1/" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="w-10 h-10 text-pink-500 hover:text-pink-700 transition-colors duration-200" />
              </a>
            </motion.span>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SocialMenu;
