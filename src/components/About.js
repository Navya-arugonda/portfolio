import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        About Me
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        I am a continuous learner with over 3 years of experience in software
        development, focused on building scalable and user-friendly
        applications. My background includes full-stack development with React,
        Node.js, Java, and Spring Boot. Experienced in designing RESTful APIs,
        integrating both SQL and NoSQL databases, and deploying applications on
        AWS and Azure.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Built production-ready applications used by thousands of users. Boosted
        backend performance by optimizing logic and database queries. Delivered
        high-quality features in Agile teams while maintaining clean,
        maintainable code.
      </p>
    </div>
  );
};

export default About;
