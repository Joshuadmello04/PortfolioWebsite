import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import face1 from '../assets/images/face3.jpg';
import face2 from '../assets/images/crmd.jpg';
import face3 from '../assets/images/mainimg.jpg'; 
import Resume from '../assets/images/resumeJoshuaDmello.pdf';

const images = [face1, face2, face3];

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

// AnimatedText Component
const AnimatedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web/App Developer',
        'Computer Engineer',
        'Tech Enthusiast',
        'Sports Enthusiast',
        'Avid Reader',
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Destroy Typed instance during cleanup to stop animation
    };
  }, []);

  return (
    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text text-5xl tracking-tight text-transparent">
      <span ref={typedElement}></span>
    </span>
  );
};

// Hero Component
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35">
      <div className="flex flex-wrap pb-14">
        <div className="w-full lg:w-1/2 pb-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-light tracking-normal lg:mt-16 lg:text-8xl"
            >
              Joshua Dmello
            </motion.h1>
            <motion.div
              className="pb-8"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              <AnimatedText />
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl text-xl font-normal py-6 tracking-normal"
            >
              I am a passionate Web Developer, App Developer and AI/ML
              enthusiast. My favourite tech includes MERN, Tailwind CSS,
              Streamlit and Flutter.
            </motion.p>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text- font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Resume
              </span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={images[currentImageIndex]}
              className="rounded-2xl w-100 h-100"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
