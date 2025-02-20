import GitHubCalendar from "react-github-calendar";
import { motion } from 'framer-motion';
import { useState } from "react";

const Calendar = () => {
  const [key] = useState(0);

  // Define a custom dark theme using a gradient from pink to purple
  const myTheme = {
    dark: [
      "#382039", // Very dark pink (background)
      "#722050", // Dark pink
      "#C72465", // Medium pink
      "#E670A0", // Light pink
      "#FF99CC"  // Lightest pink
    ]
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
      <motion.h2  
        whileInView={{opacity:1, y:10}}
        initial={{opacity:0, y:-20}}
        transition={{duration:0.75}}
        className="pb-8 mt-20 tracking-tight text-center text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-7xl"
      >
        GitHub Activity
      </motion.h2>
      
      <motion.p 
        whileInView={{opacity:1, y:10}}
        initial={{opacity:0, y:-20}}
        transition={{duration:0.75}}
        className="my-10 text-xl mb-11"
      >
        Check out my <span className="text-2xl text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">GitHub</span> contributions.
      </motion.p>
      
      <GitHubCalendar
        key={key} // Key to trigger re-render
        className="m-10"
        username="joshuadmello04"
        blockSize={20}
        fontSize={20}
        theme={myTheme} // Apply the custom dark theme
        colorScheme="dark" // Set color scheme to dark
      />
    </div>
  );
};

export default Calendar;
