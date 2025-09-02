import { useEffect, useRef } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

import About from "./components/About";
import Calendar from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import ScrollToTop from "./components/Scroller";

const App = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  // ✅ Initialize GA once
  useEffect(() => {
    ReactGA.initialize("G-H5SGHT651D"); // your GA4 Measurement ID
    ReactGA.send("pageview"); // ✅ send initial pageview
  }, []);

  // ✅ Track page views when route changes
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div className="min-h-screen overflow-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="relative w-full h-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container px-8 mx-auto overflow-hidden">
        <Navbar />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="techstack">
          <Techstack />
        </section>
        <section id="calendar">
          <Calendar />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default Root;
