import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "OC Wildland Fire & Training",
    period: "September 2025 - November 2025",
    description:
      "Contributed to the design and development of a full-stack training platform using React, Tailwind CSS, and Keystone.js. Collaborated closely with the backend team to integrate GraphQL APIs and improve data flow between the client and server. Focused on enhancing UI/UX consistency, implementing reusable components, and optimizing frontend performance for smoother user interactions.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "January 2024 - Present",
    description:
      "Developed modern, responsive websites for small businesses and personal brands using React, JavaScript, and CSS frameworks. Collaborated with clients from concept to deployment to translate design ideas into functional web experiences. Implemented accessibility, SEO best practices, and performance optimizations to deliver fast, mobile-friendly interfaces.",
  },
  {
    role: "Phlebotomist",
    company: "Labcorp",
    period: "July 2021 - Present",
    description:
      "Provide high-quality patient care by collecting and processing blood and specimen samples safely and efficiently in a high-volume laboratory environment. Maintain strict accuracy in labeling, documentation, and data entry while following HIPAA and infection-control standards. Recognized for professionalism, attention to detail, and strong communication skills when working with diverse patient populations.",
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
