import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "OC Wildland Fire & Training",
    period: "September 2025 - November 2025",
    description:
      "Built and maintained core features for a full-stack training and enrollment platform using React, TypeScript, Tailwind CSS, and Keystone.js. Collaborated closely with backend engineers to design, test, and integrate GraphQL queries and mutations, improving data accuracy and API performance across the application. Developed reusable, accessible UI components that enhanced consistency and reduced frontend development time. Actively contributed to Agile sprints, code reviews, and team planning, gaining hands-on experience with real production workflows and best practices.",
  },

  {
    role: "Phlebotomist",
    company: "Labcorp",
    period: "July 2021 - Present",
    description:
      "Collect and process high-volume blood and specimen samples while maintaining strict accuracy in patient identification, labeling, and electronic documentation. Provide compassionate care by communicating clearly with patients and helping reduce anxiety during procedures. Follow all HIPAA, biosafety, and infection-control protocols to ensure a safe and compliant clinical environment. Recognized for reliability, professionalism, and delivering consistently high-quality results in fast-paced medical settings.",
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
