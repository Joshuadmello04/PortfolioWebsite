import { useState } from 'react';
import About from "./components/About";
import Calendar from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Initially dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle between true and false
  };

  return (
    <>
      <div className={`overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white text-black'}`}>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div className={`absolute bottom-0 left-0 right-0 top-0 ${isDarkMode ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]' : ''} bg-[size:14px_24px]`}></div>
            <div className={`absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full ${isDarkMode ? 'bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]' : 'bg-[radial-gradient(circle_400px_at_50%_300px,#ffffff36,#fff)]'}`}></div>
          </div>
        </div>
        <div className="container mx-auto px-8 overflow-hidden">
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Hero />
          <About />
          <Techstack />
          <Calendar />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
