import React, { useState } from "react";
import "./Project.css";
import Button from "@mui/material/Button";

function ProjectCard({ image, title, description, button, link }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.open(link, "_blank");
    }, 500);
  };

  return (
    <div className={`project ${isClicked ? "roll" : ""}`} onClick={handleClick}>
      <img src={image} alt={title} className="img" />
      <div className="overlay">
        <div className="overlay-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button variant="contained">{button}</Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
