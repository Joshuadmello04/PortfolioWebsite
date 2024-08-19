import { useEffect, useRef } from 'react';
import profilePic from "../assets/images/mainimg.jpg";
import Typed from 'typed.js';
import { motion } from 'framer-motion'

const container = (delay) => (
  {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay }
    }
  }
)
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
        'Avid Reader'
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Destroy Typed instance during cleanup to stop animation
    };
  }, []);

  return (
    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
      <span ref={typedElement}></span>
    </span>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35"> {/*border after this entire div*/}
      <div className="flex flex-wrap pb-14">
        <div className="w-full lg:w-1/2 pb-4">
          {/*for all text*/}
          <div className="flex flex-col items-center lg:items-start">
            {/*initial={{x:-100, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1, delay:0.5}} */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Joshua Dmello</motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible">
              <AnimatedText />
            </motion.div>
            {/* Replacing the static span with the AnimatedText component */}
            <motion.p 
            variants={container(1)}
              initial="hidden"
              animate="visible"
            className="my-2 max-w-xl font-light py-6 tracking-tighter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit accusantium! Doloremque magnam perspiciatis unde facere? Reiciendis velit, odio, architecto totam a ullam facere alias optio aspernatur sit, amet iste? Repellendus nobis molestias quis ducimus officia? Voluptas odit dicta nam! Eius architecto odit, fugiat ullam atque voluptas. A, quod et!</motion.p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100,opacity:0}} 
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={profilePic} className="rounded-2xl w-100 h-100" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
