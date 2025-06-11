import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Site Service Software, Inc., Pennsylvania",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Built responsive front-end components using React.js, enhancing usability and improving operations by 25%.",
      "Developed backend APIs with Spring Boot and SQL, cutting data latency by 30% with optimized queries.",
      "Integrated Power BI dashboards to visualize 500K+ elevator inspection records, speeding up decisions by 40%.",
      "Secured 25+ APIs with role-based access control (RBAC), increasing application security and governance.",
    ],
  },
  {
    role: "Associate Engineer",
    company: "Pegasystems, India",
    period: "Mar 2023 – Jul 2023",
    description: [
      "Resolved 50+ client-reported issues in Pega Platform apps, boosting system uptime and reducing turnaround time by 20%.",
      "Completed Pega CSA certification with hands-on work in case design, data modeling, and UI development.",
    ],
  },
  {
    role: "Software Developer",
    company: "ThoughtWorks, India",
    period: "May 2022 – Feb 2023",
    description: [
      "Built a scalable e-commerce platform with React.js, Java, and Spring Boot, handling 10,000+ transactions.",
      "Launched AI-based product recommendation engine, increasing customer engagement by 20%.",
      "Tested Kafka-based microservices with unit, integration, and contract tests, reducing downtime by 25%.",
      "Applied TDD and Agile methods to reduce post-deployment bugs by 20% and speed up delivery cycles.",
    ],
  },
  {
    role: "Developer Intern",
    company: "Blockchain USA LLC, USA (Remote)",
    period: "Apr 2021 – Apr 2022",
    description: [
      "Created a decentralized identity app using SSI, Verifiable Credentials, and DIDs, delivering a functional MVP in 3 months.",
      "Implemented issuer-verifier flows with Verity SDK to ensure secure digital credential handling.",
      "Deployed solution on Azure using Docker and Ngrok, reducing manual deployment effort by 60%.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
        Experience
      </h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-12 p-8 bg-white shadow-xl rounded-xl">
          <h3 className="text-2xl font-semibold text-purple-700">{exp.role}</h3>
          <p className="text-md text-gray-600 font-medium mt-1">
            {exp.company} | {exp.period}
          </p>
          <ul className="mt-5 space-y-3 text-lg text-gray-700 list-disc list-inside">
            {exp.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
