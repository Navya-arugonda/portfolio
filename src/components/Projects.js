import React from "react";

const projects = [
  {
    title: "Customer Churn Prediction System",
    description:
      "Built a machine learning model using XGBoost to predict customer churn from telecom data. Achieved 74% accuracy and analyzed results using classification metrics and visualizations like confusion matrix and matplotlib plots.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "pandas", "Matplotlib"],
    github: "https://github.com/Navya-arugonda/customer-churn-prediction",
    image: "/churn.png",
    liveDemo: "",
  },
  {
    title: "ProfGuide",
    description:
      "Launched a university-specific review platform with 300+ verified professor and course ratings. Implemented student authentication and course validation to ensure credible feedback.",
    techStack: ["React.js", "Next.js", "TailwindCSS", "SQL", "AWS"],
    github: "https://github.com/Navya-arugonda/ProfGuide",
    image: "/profguide.png",
    liveDemo: "",
  },
  {
    title: "DocInsight",
    description:
      "Built a healthcare platform to aggregate doctor profiles, patient reviews, and surgical outcomes. Integrated MongoDB and Power BI to create interactive dashboards and enable fast, intuitive searches.",
    techStack: ["React.js", "Node.js", "MongoDB", "PowerBI"],
    github: "https://github.com/Navya-arugonda/DocInsight",
    image: "/docinsight.png",
    liveDemo: "",
  },
  {
    title: "Farmers to Consumers",
    description:
      "Developed a full-stack app to connect farmers with consumers using MERN stack. Includes real-time inventory and order tracking.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Navya-arugonda/FarmersToConsumers",
    image: "/f2c.png",
    liveDemo: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-2">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow m-2"
          >
            {/* Image Section */}
            {project.image && (
              <div className="h-32 bg-gray-200 flex items-center justify-center">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden h-full w-full items-center justify-center text-gray-500">
                  <span>Image not found</span>
                </div>
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-purple-700">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                {project.description}
              </p>
              <div className="mt-3">
                <span className="font-semibold text-gray-800 text-sm">
                  Tech Stack:
                </span>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
