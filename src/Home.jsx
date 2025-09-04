// Style
import "./index.css";

// React
import { useContext, useEffect } from "react";

// Components
import Aboutme from "./Pages/Aboutme";
import Cover from "./Pages/Cover";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import { ThemeContext } from "./Context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [theme]);

  return (
    <>
      <div
        className="relative w-full lg:max-w-5xl xl:max-w-7xl  mx-auto my-5 
        h-[95vh] 
        bg-navyGradient rounded-2xl  shadow-2xl shadow-gray-500  border-0 border-l-8  border-secondColor
        flex max-md:border-0  "
        style={{ borderStyle: "solid" }}
      >
        <div>
          <Navbar />
        </div>
        <div
          className="overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-mainColor  w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          <div id="Home">
            <Cover />
          </div>
          <div id="About">
            <Aboutme />
          </div>
          <div id="Education">
            <Education />
          </div>
          <div id="Experience">
            <Experience />
            <Skills />
          </div>
          <div id="Services">
            <Services />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <div className="cover2 workTogether py-[10%] text-center px-[15%] ">
            <h1 className="text-5xl text-PrimSecColor font-bold mb-5 max-md:text-3xl">
              Do you have a Project Idea?
            </h1>
            <h1 className="text-4xl text-PrimSecColor font-bold mb-5 max-md:text-xl">
              Let's discuss your project
            </h1>
            <p className="text-textColor font-bold leading-relaxed mb-5">
              I'm always open to discussing new projects and creative ideas.
              Let's connect and build something amazing together.
            </p>
            <a
              href="https://wa.me/201143942227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">
                <div class="text">
                  Let's work Together
                  <i className="fa-brands fa-whatsapp ml-5"></i>
                </div>
              </button>
            </a>
          </div>
          <dov id="Achievements">
            <Achievements />
          </dov>
          <div id="Contact">
            <Contact />
          </div>
          <Footer />
        </div>

        {/* Back to Top Button  */}
        <a
          href="#Home"
          className="absolute bottom-10 right-[3%] h-10 w-10 rounded-full bg-PrimSecColor flex justify-center items-center text-white"
        >
          <i className="fas fa-arrow-up" />
        </a>

        {/* Theme Button */}
        <div className="theme-switcher  absolute bottom-24 right-[3%] h-10 w-10 rounded-full bg-PrimSecColor flex justify-center items-center text-white">
          <button
            onClick={toggleTheme}
            className="bg-orangeColor border-0 text-white"
          >
            {theme === "dark" ? (
              <i className="fas fa-sun" />
            ) : (
              <i className="fas fa-moon" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

// 1- Cover
// 2- About
// 3- Education
// 4- Skills
// 5- Work Experience
// 6- Offered Services => Page for details
// 7- Projects => Page for details
// 8- Achievements => overlay for all certifications for details each certificate
// 9- Testimonials  feedback ===== Not now
// 10- Contact => Form to send the data (Google Form)
