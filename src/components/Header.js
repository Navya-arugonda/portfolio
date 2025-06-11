import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  return (
    <header className="bg-slate-800 text-white shadow-md py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-white">Navya Sree Arugonda</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <ScrollLink
              to="about-section"
              smooth
              duration={500}
              offset={-60}
              className="hover:text-purple-300 cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills-section"
              smooth
              duration={500}
              offset={-60}
              className="hover:text-purple-300 cursor-pointer"
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects-section"
              smooth
              duration={500}
              offset={-60}
              className="hover:text-purple-300 cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact-section"
              smooth
              duration={500}
              offset={-60}
              className="hover:text-purple-300 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
          {/* <li>
            <a href="/resume" className="hover:text-purple-300">
              Resume
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
