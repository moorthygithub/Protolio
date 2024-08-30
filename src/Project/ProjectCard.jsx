import React from "react";
import './Project.css';
import Button from '@mui/material/Button';


function ProjectCard({ image, title, description,button,link}) {
  return (
    <div className="project">
      <img src={image} alt={title} className="img" />
      <div className="overlay">
        <div className="overlay-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button variant="contained" href={link}
      target="_blank">{button}</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
