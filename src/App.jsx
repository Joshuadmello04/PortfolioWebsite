import About from "./components/About";
import Calendar from "./components/Calender";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import ScrollToTop from "./components/Scroller"; // Import your ScrollToTop component

const App = () => {
  return (
    <>
      <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8 overflow-hidden">
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
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
