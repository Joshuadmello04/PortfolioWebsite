// Contact.js
import  { useState } from 'react';
import { database } from '../assets/firebase/firebase.js';
import { ref, push, set } from 'firebase/database';
import './glass.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messagesRef = ref(database, 'messages');
    const newMessageRef = push(messagesRef);

    set(newMessageRef, {
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }).then(() => {
      alert('Message sent successfully!');
      setFormData({ email: '', subject: '', message: '' });
    }).catch((error) => {
      console.error('Error writing to database:', error);
    });
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.h1
          whileInView={{ opacity: 1, y: 10 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.75 }}
          className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 pb-8 bg-clip-text text-7xl tracking-tight text-transparent"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 10 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.75 }}
          className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl"
        >
        Let's Connect! 🚀
        Got a question, an epic project idea, or just want to say hey? I'm all ears! Whether you're here for collaboration or just to chat, don't hesitate to drop a message. I'm always excited to explore new opportunities and make cool things happen together.        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, y: 10 }}
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          className="glassmorphic space-y-8"
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-m font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
