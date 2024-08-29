import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiJavaFill } from "react-icons/ri";
import { SiFlutter, SiSpringboot, SiStreamlit } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const iconAnimate = (duration, yRange) => ({
    initial: { y: -yRange },
    animate: {
        y: [yRange, -yRange],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Techstack = () => {
    const [activePopover, setActivePopover] = useState(null);

    const handleMouseEnter = (tech) => setActivePopover(tech);
    const handleMouseLeave = () => setActivePopover(null);

    const popoverContent = {
        React: {
            title: 'ReactJS',
            bgColor: 'bg-cyan-600',
            textColor: 'text-white'
        },
        Flutter: {
            title: 'Flutter',
            bgColor: 'bg-cyan-700',
            textColor: 'text-white'
        },
        SpringBoot: {
            title: 'SpringBoot',
            bgColor: 'bg-green-400',
            textColor: 'text-white'
        },
        Java: {
            title: 'Java',
            bgColor: 'bg-red-500',
            textColor: 'text-white'
        },
        PostgreSQL: {
            title: 'PostgreSQL',
            bgColor: 'bg-blue-900',
            textColor: 'text-white'
        },
        Streamlit: {
            title: 'Streamlit',
            bgColor: 'bg-red-600',
            textColor: 'text-white'
        }
    };

    return (
        <div className="border-b border-neutral-800 pb-24 relative">
            <motion.h1
                whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
                className="my-20 text-center text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text tracking-tight text-transparent">
                Tech<span className="text-neutral-600">Stack</span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-9 sm:my-2.5 relative">
                {Object.keys(popoverContent).map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconAnimate(index + 2, 15 + index * 3)}
                        initial="initial"
                        animate="animate"
                        onMouseEnter={() => handleMouseEnter(tech)}
                        onMouseLeave={handleMouseLeave}
                        className="relative rounded-2xl border-4 border-neutral-800 p-6"
                    >
                        {tech === 'React' && <RiReactjsLine className="text-6xl text-cyan-600" />}
                        {tech === 'Flutter' && <SiFlutter className="text-6xl text-cyan-700" />}
                        {tech === 'SpringBoot' && <SiSpringboot className="text-6xl text-green-400" />}
                        {tech === 'Java' && <RiJavaFill className="text-6xl text-red-500" />}
                        {tech === 'PostgreSQL' && <BiLogoPostgresql className="text-6xl text-blue-900" />}
                        {tech === 'Streamlit' && <SiStreamlit className="text-6xl text-red-600" />}

                        {activePopover === tech && (
                            <motion.div
                                whileInView={{ opacity: 1, y: 10 }}
                                initial={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.65 }}
                                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-30 text-sm ${popoverContent[tech].bgColor} border border-gray-600 rounded-lg shadow-lg opacity-100 ${popoverContent[tech].textColor}`}>
                                <div className={`px-3 py-1 ${popoverContent[tech].bgColor} border-b border-gray-200 rounded-lg`}>
                                    <h3 className={`font-bold ${popoverContent[tech].textColor}`}>{popoverContent[tech].title}</h3>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Techstack;
