import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import FadeInSection from "./FadeInSection";
import profileImage from "../assets/image.jpg";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <section id="hero" className="pt-40 pb-16 ">
        {" "}
        {/* increased top padding */}
        <div className="flex flex-col md:flex-row items-center justify-center px-6">
          <img
            src={profileImage}
            alt="Navya Sree Arugonda"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h1 className="text-4xl font-bold italic text-center md:text-left">
              Hi, I'm Navya –{" "}
              <span className="text-pink-500">Software Engineer</span> &{" "}
              <span className="text-pink-500">Full Stack Developer</span>
              <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
                Turning ideas into interactive reality.
              </p>
            </h1>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg shadow-md hover:bg-purple-500 hover:text-white"
              >
                📩 Contact Me
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg shadow-md hover:bg-purple-500 hover:text-white text-center"
              >
                📄 View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" className="py-10">
        <FadeInSection>
          <About />
        </FadeInSection>
      </section>
      <section id="experience-section" className="py-10">
        <FadeInSection>
          <Experience />
        </FadeInSection>
      </section>
      <section id="projects-section" className="py-10">
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </section>
      <section id="skills-section" className="py-10">
        <FadeInSection>
          <Skills />
        </FadeInSection>
      </section>
      <section id="contact-section" className="py-10">
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
