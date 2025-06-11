import React from "react";
import profileImage from "../assets/image.jpg";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const About = () => {
  const handleScrollToContact = () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

  const handleViewResume = () => {
    navigate("/resume");
  };

  return (
    <div className="flex flex-col items-center p-20">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center relative">
          <img
            src={profileImage}
            alt="Navya Sree Arugonda"
            className="rounded-2xl shadow-lg w-80 h-80 md:w-94 md:h-94 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left md:ml-12 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold italic">
            Hi, I'm Navya - a
            <span className="text-pink-500"> Software Engineer </span> & a
            <span className="text-pink-500"> Full Stack</span> Developer
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            I am a continuous learner with over 3 years of experience in
            software development, focused on building scalable and user-friendly
            applications. My background includes full-stack development with
            React, Node.js, Java, and Spring Boot. Experienced in designing
            RESTful APIs, integrating both SQL and NoSQL databases, and
            deploying applications on AWS and Azure. Built production-ready
            applications used by thousands of users. Boosted backend performance
            by optimizing logic and database queries. Delivered high-quality
            features in Agile teams while maintaining clean, maintainable code.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button
              onClick={handleScrollToContact}
              className="border-2 border-purple-500 text-xl text-purple-500 px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:text-white"
            >
              📩 Contact Me
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-500 text-xl text-purple-500 px-6 py-3 rounded-lg shadow-md transition hover:bg-purple-500 hover:text-white text-center"
            >
              📄 View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
