import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import face1 from '../assets/images/face3.jpg';
import face2 from '../assets/images/crmd.jpg';
import face3 from '../assets/images/mainimg.jpg';
import Resume from '../assets/JoshuaDmelloUBS.pdf';

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
    <span className="pb-8 text-3xl tracking-tight text-transparent sm:text-4xl lg:text-5xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
      <span ref={typedElement}></span>
    </span>
  );
};

// Hero Component
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contactRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-3 border-b border-neutral-900 pb-14 lg:mb-35">
      <div className="flex flex-wrap pb-14">
        <div className="w-full pb-4 lg:w-1/2">
          <div className="flex flex-col items-center ml-7 lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 font-light tracking-normal text-8xl lg:mt-16 lg:text-8xl"
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
              className="max-w-xl pb-6 my-2 text-xl font-normal tracking-normal"
            >
              A passionate Web Developer, App Developer and AI/ML
              enthusiast. My favourite tech includes MERN, Tailwind CSS,
              Streamlit and Flutter.
            </motion.p>
            <div>
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
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text- font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ behavior: 'smooth' });
                }}
              >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Contact Me
            </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={images[currentImageIndex]}
              className="
              rounded-2xl 
              object-cover 
              w-full 
              max-w-[500px] 
              h-auto 
              aspect-square 
              sm:h-[400px] 
              md:h-[450px] 
              lg:h-[500px] 
              xl:h-[550px]
            "
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
