import './contact.css'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <section>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
  <motion.h1
  whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
  className="my-20 text-center text-4xl">Get in Touch
  </motion.h1>
  <motion.p
  whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.75 }}
  className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Id love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. Im always open to discussing new opportunities and collaborations.</motion.p>
      <motion.form 
      whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -40 }}
                transition={{ duration: 1}}
      action="#" className="glassmorphic space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how can I help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Send Message
          </span>
        </button>
          </motion.form>
  </div>
</section>
  )
}

export default Contact
