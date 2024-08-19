import { RiReactjsLine, RiJavaFill } from "react-icons/ri";
import { SiFlutter, SiSpringboot, SiStreamlit } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from 'framer-motion';

const iconAnimate = (duration, yRange) => ({
    initial: { y: -yRange },
    animate: {
        y: [yRange, -yRange],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Techstack = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
                className="my-20 text-center text-4xl">
                Tech<span className="text-neutral-600">Stack</span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:my-2.5">
                <motion.div
                    variants={iconAnimate(2, 15)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconAnimate(2.5, 12)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <SiFlutter className="text-6xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={iconAnimate(3, 18)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <SiSpringboot className="text-6xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconAnimate(3.5, 14)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <RiJavaFill className="text-6xl text-red-600" />
                </motion.div>
                <motion.div
                    variants={iconAnimate(4, 16)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <BiLogoPostgresql className="text-6xl text-blue-900" />
                </motion.div>
                <motion.div
                    variants={iconAnimate(4.5, 10)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-6">
                    <SiStreamlit className="text-6xl text-red-600" />
                </motion.div>
            </div>
        </div>
    );
}

export default Techstack;
