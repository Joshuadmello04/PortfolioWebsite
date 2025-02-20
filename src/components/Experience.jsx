import { EXPERIENCES } from '../assets/content/index.js';
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <div className="p-4 border-b border-neutral-900">
      <motion.h2 
      whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
      className="pb-8 my-20 text-6xl tracking-tight text-center text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.75 }}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-lg text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className="mb-2 text-base font-bold">
                {experience.role} - <span className='text-lg text-purple-100'>{experience.company}</span>
                </h6>
                <p className='p-1 mb-4 text-neutral-400'>{experience.description}</p>
                   {experience.technologies.map((tech,index) =>(
                      <span key={index} className='mr-2 mt-4 rounded bg-neutral-900  px-2 py-1.5 text-sm font-bold text-purple-600'> 
                         {tech}
                      </span>
                   )
                  
                  )}
             </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
