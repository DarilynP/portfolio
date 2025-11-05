// Experience.jsx
import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "OC Wildland Fire & Training ",
    period: "september 2025 - november 2025",
    description:
      "Worked on improving the frontend of the internal dashboard using React and Tailwind. Collaborated with backend team to integrate APIs.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "January 2024 - Present",
    description:
      "Built responsive portfolio websites for clients using React, HTML, CSS, and JavaScript.",
  },
  {
    role: "Phelebotmist",
    company: "Labcorp",
    period: "July 2021 - Present",
    description:
      "Collecting blood and other specimens from patients in a safe, accurate, and compassionate manner. They ensure proper labeling, handling, and transport of samples while maintaining strict infection control and quality standards. Collecting specimen in a timely manner with attention to detail and adherence to laboratory protocols.",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience__item">
            <h3 className="experience__role">{exp.role}</h3>
            <p className="experience__company">{exp.company}</p>
            <p className="experience__period">{exp.period}</p>
            <p className="experience__description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
