import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpressvpn, SiMongodb, SiTailwindcss } from 'react-icons/si';


/**
 * An array of skill objects, each containing an icon and a label.
 * 
 * @constant
 * @type {Array<{icon: JSX.Element, label: string}>}
 * @property {JSX.Element} icon - The JSX element representing the skill's icon.
 * @property {string} label - The name of the skill.
 */
const skills = [
  { icon: <FaHtml5 />, label: 'HTML' },
  { icon: <FaCss3Alt />, label: 'CSS' },
  { icon: <FaJs />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpressvpn />, label: 'Express.js' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  { icon: <FaGithub />, label: 'GitHub' },
];

const SkillsSection = () => {
  return (
    <main className="h-100 border">
      <motion.section 
        className="text-center text-4xl mt-10 font-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        SKILLS
      </motion.section>

      <section className="flex justify-center items-center mt-10 gap-10 flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-center text-2xl mt-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <div>{skill.label}</div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default SkillsSection;
