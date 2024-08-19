import { PROJECTS } from "../assets/content"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:0.65}}
            className="w-full lg:w-1/4">
              <img src={project.image} width={200} height={200} alt={project.title} className="mb-6 rounded" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.65 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="py-1.5 px-1.5 text-sm font-bold mr-2 mt-4 rounded text-purple-600 bg-neutral-900">{tech}</span>
              )
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
