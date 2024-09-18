import abtMePic from "../assets/images/abtme.jpg"
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div className="border-b border-neutral-900 pt-3 pb-24">
            <motion.h1 
              whileInView={{opacity:1,y:50}}
              initial={{opacity:0,y:0}}
              transition={{duration:0.75}}
              className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text tracking-tight text-transparent">About <span className="text-neutral-500">Me</span></motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.75 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={abtMePic} className="w-500 h-500 rounded-2xl" alt="aboutme" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 lg:text-xl tracking-tighter ">I am a third-year Computer Engineering student at Fr. CRCE, driven by a passion for creating innovative and efficient solutions. My journey as a developer spans a diverse range of technologies, including Java SpringBoot, the MERN stack, Streamlit, Flask, and Flutter. Beyond my technical expertise, I am deeply enthusiastic about football, with Chelsea FC as my favorite team, and I admire Cristiano Ronaldo for his exceptional skill and relentless pursuit of greatness. This blend of professional dedication and personal passion fuels my ambition to excel across all facets of life. Whether navigating complex development challenges or finding balance through sports and theology, I strive to deliver exceptional results and continuously grow both personally and professionally.</p>
                        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About

