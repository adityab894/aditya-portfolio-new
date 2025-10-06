import React from "react";

const MobileCard = ({ project }) => (
  <div className="card">
    <div className="main-content">
      <div className="categories">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          loading="lazy"
        />
        {project.softUsed.map((tech, index) => (
          <span key={index} className="text-2ndry-1 dark:text-2ndry-1">
            {tech}
          </span>
        ))}
      </div>
      <p className="heading text-primary dark:text-2ndry-1">{project.title}</p>
      <div className="footer text-primary-3 dark:text-2ndry-2">
        {project.description}
      </div>
    </div>
  </div>
);

export default MobileCard;