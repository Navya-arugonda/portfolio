import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import FadeInSection from "./FadeInSection";

const Home = () => {
  return (
    <div>
      <section id="about-section" className="py-16">
        <FadeInSection>
          <About />
        </FadeInSection>
      </section>

      <section id="experience-section" className="py-14">
        <FadeInSection>
          <Experience />
        </FadeInSection>
      </section>

      <section id="projects-section" className="py-14">
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </section>

      <section id="skills-section" className="py-14">
        <FadeInSection>
          <Skills />
        </FadeInSection>
      </section>

      <section id="contact-section" className="py-14">
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
