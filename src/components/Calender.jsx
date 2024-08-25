import GitHubCalendar from "react-github-calendar";
import { motion } from 'framer-motion'

const Calendar = () => {
  // Define custom colors
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
      <motion.h2  
        whileInView={{opacity:1,y:10}}
        initial= {{opacity:0,y:-20}}
        transition={{duration:0.75}}
      className="mt-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text text-7xl tracking-tight text-transparent">GitHub Activity</motion.h2>
      <motion.p 
      whileInView={{opacity:1,y:10}}
        initial= {{opacity:0,y:-20}}
        transition={{duration:0.75}}
      className="text-xl my-10 mb-11">
Check out my <span className=" text-2xl bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-transparent">Github</span> contributions.
      </motion.p>
      <GitHubCalendar
        className="m-10 text-pink-300 "
        username="joshuadmello04"
        colorScheme="dark"
        blockSize={20}
        fontSize={17}
      />
    </div>
  );
};

export default Calendar;
