import React from "react";
import exportIcon from "../assets/export.png";

const ProjectCard = ({ index, title, image, description, github, live, reverse }) => {
  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      
      {/* Image container */}
      {image && (
        <div className="project-card__image">
          <img src={image} alt={title} />
        </div>
      )}

      {/* Description container */}
      <div className="project-card__description-container">
        <div className="project-card__number">
          {index.toString().padStart(2, "0")}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {/* Links */}
        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}

          {/* Replaced “Live Demo” text with icon */}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <img
                src={exportIcon}
                alt="Live Demo"
                className="project-card__icon"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
