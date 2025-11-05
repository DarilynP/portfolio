import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import wtwrss from "../assets/wtwrss.png";
import newsapiss from "../assets/newsapiss.png";
import todo from "../assets/todo.png";
import coffee from "../assets/coffee.png";
import ecommerce from "../assets/Screenshot.png";

const Projects = () => {
  const projects = [
    {
      title: "Euphoria E-commerce",
      image: ecommerce,
      description:
        "Euphoria is a modern e-commerce web app built with React and Vite. It features product listings, category filtering, a favorites system, and a dynamic shopping cart — all wrapped in a clean, responsive design for a smooth online shopping experience.",
      live: "https://DarilynP.github.io/ecommerce-frontend/",
    },

    {
      title: "News Explorer",
      image: newsapiss,
      description:
        "News Explorer lets users search and browse articles from multiple sources. Users can save their favorite articles for later reading. The app provides a clean and intuitive interface for efficient news exploration.",
      live: "https://darilynp.github.io/news-explorer-frontend/",
    },
    {
      title: "What to Wear",
      image: wtwrss,
      description:
        "What to Wear suggests outfits based on real-time weather conditions. Users can customize preferences for style and comfort. The app helps users make better clothing choices for any situation.",
      live: "https://devdarilyn.ignorelist.com/",
    },
    {
      title: "Coffee Shop",
      image: coffee,
      description:
        "A responsive website for a coffee shop featuring an interactive menu. Users can place orders online and explore product details. The design is modern, visually engaging, and easy to navigate.",
      live: "https://github.com/DarilynP/se_project_coffeeshop",
    },
    {
      title: "To-do App",
      image: todo,
      description:
        "A productivity app for managing daily tasks and deadlines. Its simple interface makes organizing to-do lists efficient and stress-free. Users can prioritize, track, and complete tasks effortlessly.",
      live: "https://darilynp.github.io/se_project_todo-app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">
        My <span className="projects__title-bold">Projects</span>
      </h2>

      <div className="projects__list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index + 1}
            {...project}
            reverse={index % 2 !== 0} // alternate sides
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
