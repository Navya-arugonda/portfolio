import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Site Service Software, Inc.",
    location: "Pennsylvania",
    duration: "Sep 2024 – Dec 2024",
    bullets: [
      "Designed and executed responsive frontend components using React.js, improving usability and operational efficiency by 25%.",
      "Developed backend services with Spring Boot and SQL, reducing data latency by 30% through optimized queries.",
      "Integrated Power BI dashboards to visualize 500K+ elevator maintenance records, accelerating decision-making by 40%.",
      "Enforced RBAC and secured 25+ APIs in Agile workflows, improving system security and governance.",
    ],
  },
  {
    role: "Associate Engineer",
    company: "Pegasystems",
    location: "India",
    duration: "Mar 2023 – Jul 2023",
    bullets: [
      "Resolved over 50 client-reported issues in Pega applications, improving system uptime and reducing turnaround time by 20%.",
      "Completed CSA certification and built expertise in case lifecycle design, data modeling, and UI development.",
    ],
  },
  {
    role: "Software Developer",
    company: "ThoughtWorks",
    location: "India",
    duration: "May 2022 – Feb 2023",
    bullets: [
      "Engineered a scalable e-commerce platform using React.js, Java, and Spring Boot, supporting 10K+ transactions.",
      "Implemented AI-driven product recommendations, boosting engagement by 20%.",
      "Built and tested Kafka-based messaging systems on Kubernetes, reducing downtime by 25%.",
      "Applied TDD and Agile practices to reduce bugs by 20% and accelerate sprint velocity.",
    ],
  },
  {
    role: "Developer Intern",
    company: "Blockchain USA LLC",
    location: "USA",
    duration: "Apr 2021 – Apr 2022",
    bullets: [
      "Built a decentralized identity web app with SSI, VCs, and DIDs; delivered a functional MVP in 3 months.",
      "Configured Verity-SDK-based Issuer/Verifier roles for zero-failure credential validation.",
      "Deployed using Azure, Docker, and Ngrok, reducing deployment time by 60%.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Experience
      </h2>
      <div className="max-w-6xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-2xl font-bold text-purple-800">
                {exp.role} @ {exp.company}
              </h3>
              <span className="text-lg text-gray-600 italic">
                {exp.duration}
              </span>
            </div>
            <p className="text-base text-gray-500 mb-4">{exp.location}</p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
