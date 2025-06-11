import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-700">
        Navya Sree Arugonda
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            {onHomePage ? (
              <ScrollLink
                to="about-section"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-700 hover:text-purple-500 cursor-pointer"
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className="text-gray-700 hover:text-purple-500"
              >
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {onHomePage ? (
              <ScrollLink
                to="skills-section"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-700 hover:text-purple-500 cursor-pointer"
              >
                Skills
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className="text-gray-700 hover:text-purple-500"
              >
                Skills
              </RouterLink>
            )}
          </li>
          <li>
            {onHomePage ? (
              <ScrollLink
                to="projects-section"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-700 hover:text-purple-500 cursor-pointer"
              >
                Projects
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className="text-gray-700 hover:text-purple-500"
              >
                Projects
              </RouterLink>
            )}
          </li>
          <li>
            {onHomePage ? (
              <ScrollLink
                to="contact-section"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-700 hover:text-purple-500 cursor-pointer"
              >
                Contact
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                className="text-gray-700 hover:text-purple-500"
              >
                Contact
              </RouterLink>
            )}
          </li>
          {/* <li>
            <RouterLink
              to="/resume"
              className="text-gray-700 hover:text-purple-500"
            >
              Resume
            </RouterLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
