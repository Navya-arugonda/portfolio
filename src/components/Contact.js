import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Let's Connect
      </h2>
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="mailto:navyasreearugonda@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-5xl text-black hover:text-gray-700 transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/navya-sree-arugonda-29b891193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl text-black hover:text-gray-700 transition-transform transform hover:scale-110" />
        </a>
        <a
          href="https://github.com/Navya-arugonda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-5xl text-black hover:text-gray-700 transition-transform transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
