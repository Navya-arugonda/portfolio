import React from "react";

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        src="/resume.pdf" // Ensure the PDF is placed in the public folder
        title="Navya Sree Arugonda - Resume"
        className="w-full md:w-3/4 h-[90vh] border rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Resume;
