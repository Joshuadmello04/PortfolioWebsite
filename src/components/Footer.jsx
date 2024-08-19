import {motion} from 'framer-motion'
const Footer = () => {
    return (
      <motion.footer 
      whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
      className=" border-t border-neutral-800 text-gray-200 py-3 flex justify-center items-center">
        <div className="text-center">
          <span className="text-m text-gray-400">
            Created by <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text text-xl tracking-tight text-transparent'>Joshua Dmello</span> 
          </span>
        </div>
      </motion.footer>
    );
  }
  
  export default Footer;
  