import abtMePic from "../assets/images/abtme.jpg"
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div className="border-b border-neutral-900 pt-3 pb-24">
            <motion.h1 
              whileInView={{opacity:1,y:50}}
              initial={{opacity:0,y:0}}
              transition={{duration:0.75}}
              className="my-20 text-center text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text tracking-tight text-transparent">About <span className="text-neutral-500">Me</span></motion.h1>
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
                        <p className="my-2 max-w-xl py-6 lg:text-2xl tracking-tighter font-normal">Third Year Computer Engineering Student at Fr. CRCE. A passionate developer focused on creating innovative and efficient solutions striving to deliver exceptional results & an avid enthusiast of football, basketball and theology. An ambitious student with a desire to excel across all facets of life. I have worked with a variety of technologies including Java Springboot, MERN stack, Streamlit, Flask and Flutter. </p>
                        </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About

