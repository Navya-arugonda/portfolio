import React from "react";

const skills = {
  Languages: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "C++",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
  ],
  Databases: ["SQL", "PostgreSQL", "MongoDB", "DynamoDB"],
  Web: [
    "React",
    "Node.js",
    "Next.js",
    "HTML",
    "CSS",
    "TailwindCSS",
    "REST APIs",
  ],
  DevOps_Cloud: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Spring Boot",
    "Kafka",
    "Git",
    "Power BI",
    "Pega",
  ],
  Practices: [
    "Agile Development",
    "CI/CD",
    "Test-Driven Development (TDD)",
    "API Design",
    "System Monitoring",
  ],
  MachineLearning: [
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "SMOTE",
  ],
};

const Skills = () => {
  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-12">
        Technical Skills
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              {category.replace(/_/g, " & ")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-black text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
