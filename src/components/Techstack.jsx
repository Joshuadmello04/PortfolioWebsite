import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiJavaFill } from "react-icons/ri";
import { SiFlutter, SiSpringboot, SiStreamlit, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiFirebase, SiSqlite } from "react-icons/si";
import { BiLogoPostgresql, BiLogoNodejs, BiLogoBootstrap, BiLogoFlask } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

// Split tech stack into 3 rows
const techStackRows = [
  // First Row
  [
    { name: 'HTML5', icon: <SiHtml5 className="text-6xl text-orange-600" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-6xl text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-500" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
    { name: 'Bootstrap', icon: <BiLogoBootstrap className="text-6xl text-purple-600" /> },
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

const TechstackCarousel = () => {
    // State to track hover for each row
    const [hoveredRow, setHoveredRow] = useState(null);

    // Scrolling animation with a dynamic duration
    const createScrollingAnimation = (duration) => ({
        animate: {
            x: [0, -1500], // Adjust based on content width
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: duration, // Customize speed
                }
            }
        }
    });

    return (
        <div className="w-full overflow-hidden py-20 relative">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.75 }}
                className="my-20 text-center text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text tracking-tight text-transparent">
                Tech<span className="text-neutral-600">Stack</span>
            </motion.h1>

            <motion.p
                whileInView={{ opacity: 1, y: -40 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.75 }}
                className="mb-8 lg:mb-16 font-medium text-center lg:text-3xl md:text-2xl text-gray-500 dark:text-gray-400 sm:text-xl"
            >
                Developed projects with:
            </motion.p>

            {/* Carousel Rows */}
            {techStackRows.map((techStack, rowIndex) => (
                <div
                    key={rowIndex}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className="relative w-full overflow-hidden mb-8"
                >
                    <motion.div
                        className="flex gap-12"
                        animate={hoveredRow === rowIndex ? { x: 0 } : createScrollingAnimation(10 + rowIndex * 5).animate}
                        transition={{ ease: "linear", duration: 1 }}
                    >
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center p-4 rounded-2xl border-8 border-neutral-800"
                            >
                                <span className='ml-3'>{tech.icon}</span>
                                <span className="text-white text-lg m-4">{tech.name}</span>
                            </motion.div>
                        ))}
                        {/* Repeat to create infinite scroll */}
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={`${index}-duplicate`}
                                className="flex items-center justify-center p-4 rounded-2xl border-8 border-neutral-800"
                            >
                                <span className='ml-3'>{tech.icon}</span>
                                <span className="text-white text-lg m-4">{tech.name}</span>
                            </motion.div>
                        ))}
                        {techStack.map((tech, index) => (
                          <motion.div
                              key={`${index}-duplicate`}
                              className="flex items-center justify-center p-4 rounded-2xl border-8 border-neutral-800"
                          >
                              <span className='ml-3'>{tech.icon}</span>
                              <span className="text-white text-lg m-4">{tech.name}</span>
                          </motion.div>
                      ))}
                      {techStack.map((tech, index) => (
                        <motion.div
                            key={`${index}-duplicate`}
                            className="flex items-center justify-center p-4 rounded-2xl border-8 border-neutral-800"
                        >
                            <span className='ml-3'>{tech.icon}</span>
                            <span className="text-white text-lg m-4">{tech.name}</span>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default TechstackCarousel;

