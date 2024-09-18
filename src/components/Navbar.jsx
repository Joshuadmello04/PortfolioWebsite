import { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [tooltip, setTooltip] = useState(null); // State to manage tooltip visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll listener to make navbar sticky after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (icon) => {
    setTooltip(icon);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <nav
      className={`${
        isSticky
          ? "fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md transition-all duration-300 ease-in-out z-50"
          : "relative"
      } flex items-center justify-between p-4`}
    >
      <div className="flex flex-shrink-0 items-center">
        <span className="self-center mx-2 w-10 text-7xl font-semibold whitespace-nowrap dark:text-white">
          Jd
        </span>
      </div>

      {/* Hamburger icon for mobile */}
      {!isOpen && (
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-4xl focus:outline-none">
            <FaBars />
          </button>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex m-4 items-center justify-center gap-4 text-4xl relative">
        <a
          href="https://www.linkedin.com/in/joshua-dmello-a48aa0264/"
          className="relative group"
          onMouseEnter={() => handleMouseEnter('LinkedIn')}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin />
          {tooltip === 'LinkedIn' && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded">
              LinkedIn
            </div>
          )}
        </a>
        <a
          href="https://github.com/Joshuadmello04"
          className="relative group"
          onMouseEnter={() => handleMouseEnter('GitHub')}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub />
          {tooltip === 'GitHub' && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded">
              GitHub
            </div>
          )}
        </a>
        <a
          href="https://www.instagram.com/joshuadmello04/"
          className="relative group"
          onMouseEnter={() => handleMouseEnter('Instagram')}
          onMouseLeave={handleMouseLeave}
        >
          <FaInstagram />
          {tooltip === 'Instagram' && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded">
              Instagram
            </div>
          )}
        </a>
        <a
          href="mailto:joshuadmello777@gmail.com"
          className="relative group"
          onMouseEnter={() => handleMouseEnter('Email')}
          onMouseLeave={handleMouseLeave}
        >
          <SiGmail />
          {tooltip === 'Email' && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded">
              Email
            </div>
          )}
        </a>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isOpen && (
        <div className="w-full h-full md:hidden fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-6 z-30 text-white bg-transparent bg-opacity-60 transition-opacity duration-300 ease-in-out">
          {/* Close icon inside mobile menu */}
          <button onClick={toggleMenu} className="absolute top-6 right-8 text-4xl">
            <FaTimes />
          </button>
          <a
            href="#about"
            onClick={toggleMenu}
            className="block text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            About
          </a>
          <a
            href="#techstack"
            onClick={toggleMenu}
            className="block mt-14 text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            Techstack
          </a>
          <a
            href="#calendar"
            onClick={toggleMenu}
            className="block mt-14 text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            Calendar
          </a>
          <a
            href="#experience"
            onClick={toggleMenu}
            className="block mt-14 text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block mt-14 text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block mt-14 text-2xl font-bold transform transition duration-300 ease-in-out hover:scale-110 hover:text-purple-500"
          >
            Contact
          </a>

          {/* Social Media Icons at the bottom of the mobile menu */}
          <div className="mt-8 flex gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/joshua-dmello-a48aa0264/"
              className="hover:text-[#0077b5]"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Joshuadmello04" className="hover:text-[#333]">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/joshuadmello04/"
              className="hover:text-[#e1306c]"
            >
              <FaInstagram />
            </a>
            <a href="mailto:joshuadmello777@gmail.com" className="hover:text-teal-900">
              <SiGmail />
            </a>
          </div>
        </div>
      )}

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300 ease-in-out z-20"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
