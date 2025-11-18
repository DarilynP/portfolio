import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "OC Wildland Fire & Training",
    period: "September 2025 - November 2025",
    description:
      "Built and maintained core features for a full-stack training and enrollment platform using React, TypeScript, Tailwind CSS, and Keystone.js. Collaborated with backend engineers to design and integrate GraphQL queries and mutations, improving data consistency across the application. Contributed reusable UI components and enhanced UX flow, resulting in a faster and more intuitive interface. Participated in Agile sprint planning, code reviews, and technical discussions, gaining experience in real production-level engineering workflows.",
  },

  {
    role: "Phlebotomist",
    company: "Labcorp",
    period: "July 2021 - Present",
    description:
      "Collect and process high-volume blood and specimen samples while ensuring accuracy in patient identification, labeling, and documentation. Communicate clearly and compassionately with patients of all ages and backgrounds, helping ease discomfort and anxiety during procedures. Maintain strict compliance with HIPAA, biosafety protocols, and infection control standards. Consistently recognized by supervisors and patients for professionalism, attention to detail, and strong reliability in fast-paced medical environments.",
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
