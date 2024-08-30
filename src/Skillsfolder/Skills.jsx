import "./Skills.css";
import css from "../Components/Assets/CSS.jpg";
import Html from "../Components/Assets/HTML5.webp";
import javascript from "../Components/Assets/JAVASCRIPT.webp";
import ReactImage from "../Components/Assets/React.webp";
import python from "../Components/Assets/PYTHON.png";
import sql from "../Components/Assets/SQL.png";
import materialui from "../Components/Assets/MATERIALUI.png";
import fastapi from "../Components/Assets/fastapi.jpg";
import typescript from "../Components/Assets/pngwing.com.png";
import Tap from "../Components/Assets/tap.png";
import Image from "./Images";
import { useState } from "react";

function Skills() {
  const [exitAnimation, setExitAnimation] = useState("");

  const handleExit = (animation) => {
    setExitAnimation(animation);
    setTimeout(() => {
      setExitAnimation(""); // Reset after animation
    }, 1500); // Match the animation duration
  };

  return (
    <div className={`skills-container ${exitAnimation}`}>
      <div className="skills-heading">
        <h1>
          My<p className="skills-heading-1">Skills</p>
        </h1>
      </div>
      <div className="tap-icon">
        <img src={Tap} alt="Tap here" className="tap-animation" />
      </div>
      <div className="skills-grid">
        <div onClick={() => handleExit("bounceOut")}>
          <Image path={ReactImage} desc={"React"} />
        </div>
        <div onClick={() => handleExit("bounceOutDown")}>
          <Image path={javascript} desc={"Javascript"} />
        </div>
        <div onClick={() => handleExit("bounceOutUp")}>
          <Image path={css} desc={"CSS"} />
        </div>
        <div onClick={() => handleExit("bounceOutLeft")}>
          <Image path={Html} desc={"HTML"} />
        </div>
        <div onClick={() => handleExit("bounceOutRight")}>
          <Image path={python} desc={"Python"} />
        </div>
        <div onClick={() => handleExit("bounceOutDown")}>
          <Image path={fastapi} desc={"FastApi"} />
        </div>
        <div onClick={() => handleExit("bounceOutUp")}>
          <Image path={sql} desc={"Sql"} />
        </div>
        <div onClick={() => handleExit("bounceOutLeft")}>
          <Image path={materialui} desc={"MaterialUi"} />
        </div>
        <div onClick={() => handleExit("bounceOutRight")}>
          <Image path={typescript} desc={"TypeScript"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
