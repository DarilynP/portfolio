import React from "react";
import "../styles/Skills.css";
import git from "../assets/git.png";
import javascript from "../assets/javascript.png";
import socket from "../assets/socket.png";
import express from "../assets/icon-express.png";
import mongodb from "../assets/icon-mongodb.png";
import node from "../assets/icon-nodejs.png";
import react from "../assets/icon-react.png";
import tailwind from "../assets/icon-tailwindcss.png";
import tyescript from "../assets/icon-typescript.png";

const skills = [
  { img: git, name: "Git" },
  { img: javascript, name: "JavaScript" },
  { img: socket, name: "Socket.io" },
  { img: express, name: "Express" },
  { img: mongodb, name: "mongodb" },
  { img: node, name: "node" },
  { img: react, name: "react" },
  { img: tailwind, name: "tailwind" },
  { img: tyescript, name: "typescript" },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>
        <span className="regular">My</span> Skills
      </h2>

      <div className="skills__logos">
        {skills.map((skill, index) => (
          <div key={index} className="skills__logo-box">
            <img src={skill.img} alt={`${skill.name} logo`} />
            <p>{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
