import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../assets/content";
import './glass.css';

// Modal component for project details
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="fixed z-50 w-11/12 max-w-md p-6 -translate-x-1/2 -translate-y-1/2 border shadow-2xl top-1/2 left-1/2 bg-neutral-800/90 rounded-xl backdrop-blur-md border-purple-500/20"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button 
              className="absolute transition-colors top-4 right-4 text-neutral-400 hover:text-white"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
            <p className="mb-6 text-sm text-neutral-300 md:text-base">{project.description}</p>
            
            <h3 className="mb-2 text-lg font-semibold text-purple-300">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-semibold text-purple-300 rounded-full bg-purple-500/20 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-5 py-3 font-medium text-center text-white transition-opacity rounded-lg shadow-lg md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 hover:shadow-purple-500/30"
              >
                View Project
              </a>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

// TiltedCard component with project-specific modifications
const TiltedProjectCard = ({
  project,
  rotateAmplitude = 10,
  scaleOnHover = 1.05
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });
  const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });
  const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 });
  const contentOpacity = useSpring(0.7, { damping: 30, stiffness: 100 });
  const contentY = useSpring(10, { damping: 30, stiffness: 100 });

  function handleMouse(e) {
    if (!ref.current) return;

    // Only apply 3D effect on devices that support hover
    if (window.matchMedia("(hover: hover)").matches) {
      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

      rotateX.set(rotationX);
      rotateY.set(rotationY);
    }
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    contentOpacity.set(1);
    contentY.set(0);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    contentOpacity.set(0.7);
    contentY.set(10);
  }

  return (
    <>
      <motion.div
        ref={ref}
        className="relative w-full lg:w-full mb-16 [perspective:1000px]"
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative [transform-style:preserve-3d] overflow-hidden rounded-xl bg-neutral-900 shadow-xl cursor-pointer"
          style={{
            rotateX,
            rotateY,
            scale
          }}
          onClick={() => setModalOpen(true)}
        >
          <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
            <motion.img
              src={project.image}
              alt={project.title}
              className="object-cover object-center w-full h-full"
              style={{
                scale: 1.1,
              }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6"
            style={{
              opacity: contentOpacity,
              y: contentY
            }}
          >
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
            <motion.button
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 mt-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:shadow-purple-500/30 hover:from-purple-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={project}
      />
    </>
  );
};

TiltedProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
  rotateAmplitude: PropTypes.number,
  scaleOnHover: PropTypes.number,
};

const Projects = () => {
  return (
    <section id="projects" className="px-4 pb-16 border-b border-neutral-900">
      <motion.h1 
        whileInView={{ opacity: 1, y: 10 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.75 }}
        className="pb-8 my-20 text-4xl tracking-tight text-center text-transparent md:text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
      >
        Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 gap-6 mx-auto gap-y-12 max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <TiltedProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;