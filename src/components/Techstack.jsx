import { useRef } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiJavaFill, RiNextjsFill } from "react-icons/ri";
import { SiFlutter, SiSpringboot, SiStreamlit, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiFirebase, SiSqlite } from "react-icons/si";
import { BiLogoPostgresql, BiLogoNodejs, BiLogoBootstrap, BiLogoFlask } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import ScrollVelocity from './ScrollVelocity';

const techStackRows = [
  // First Row
  [
    { name: 'HTML5', icon: <SiHtml5 className="text-6xl text-orange-600" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-6xl text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-500" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
    { name: 'NextJS', icon: <RiNextjsFill className="text-6xl text-white" /> },
    { name: 'ReactJS', icon: <RiReactjsLine className="text-6xl text-cyan-600" /> },
  ],
  // Second Row
  [
    { name: 'NodeJS', icon: <BiLogoNodejs className="text-6xl text-green-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-6xl text-yellow-600" /> },
    { name: 'SQLite', icon: <SiSqlite className="text-6xl text-blue-800" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-6xl text-green-600" /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-6xl text-blue-900" /> },
    { name: 'MariaDB', icon: <BiLogoPostgresql className="text-6xl text-blue-900" /> },
  ],
  // Third Row
  [
    { name: 'Flutter', icon: <SiFlutter className="text-6xl text-cyan-800" /> },
    { name: 'Python', icon: <FaPython className="text-6xl text-yellow-400" /> },
    { name: 'Flask', icon: <BiLogoFlask className="text-6xl text-white" /> },
    { name: 'Streamlit', icon: <SiStreamlit className="text-6xl text-red-600" /> },
    { name: 'Java', icon: <RiJavaFill className="text-6xl text-red-500" /> },
    { name: 'SpringBoot', icon: <SiSpringboot className="text-6xl text-green-400" /> },
  ]
];

const TechCarousel = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div ref={scrollContainerRef} className="relative w-full py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.75 }}
          className="pb-8 my-10 text-6xl font-normal tracking-tight text-center text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
        >
          Tech<span className="text-neutral-600">Stack</span>
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, y: -40 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.75 }}
          className="relative mb-8 font-medium text-center text-gray-500 lg:mb-16 lg:text-3xl md:text-2xl dark:text-gray-400 sm:text-xl"
        >
          Developed projects with:
          <motion.span
            className="absolute bottom-0 w-24 h-1 -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.p>
      </motion.div>

      <div className="space-y-12">
        {techStackRows.map((row, rowIndex) => (
          <ScrollVelocity
            key={rowIndex}
            scrollContainerRef={scrollContainerRef}
            texts={[row.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(231, 112, 160, 0.1)"
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-5 mx-6 
                          rounded-xl bg-neutral-900/40 backdrop-blur-sm
                          border-2 border-neutral-600 transition-all duration-300
                          hover:border-[#E670A0] hover:bg-neutral-900/60"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {tech.icon}
                </motion.div>
                <span className="text-xl font-medium text-white/90">{tech.name}</span>
              </motion.div>
            ))]}
            velocity={rowIndex === 0 ? 20 : rowIndex === 1 ? 35 : 25}
            numCopies={4}
            velocityMapping={{ input: [50, 1000], output: [0, 3] }}
            damping={50}
            stiffness={400}
            parallaxClassName="overflow-hidden"
            scrollerClassName="gap-6"
          />
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;