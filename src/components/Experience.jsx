import { EXPERIENCES } from '../assets/content/index.js';
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2 
      whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
      className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text text-6xl tracking-tight text-transparent">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.75 }}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-neutral-400 text-lg'>{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
            className='w-full max-w-xl lg:w-3/4'>
                <h6 className="mb-2 text-base font-bold">
                {experience.role} - <span className='text-lg text-purple-100'>{experience.company}</span>
                </h6>
                <p className='mb-4 p-1 text-neutral-400'>{experience.description}</p>
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
