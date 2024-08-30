import "./Skills.css";
import css from "../Components/Assets/CSS.jpg";
import Html from "../Components/Assets/HTML5.webp";
import javascript from "../Components/Assets/JAVASCRIPT.webp";
import React from "../Components/Assets/React.webp";
import python from "../Components/Assets/PYTHON.png";
import sql from "../Components/Assets/SQL.png";
import materialui from "../Components/Assets/MATERIALUI.png";
import fastapi from "../Components/Assets/fastapi.jpg";
import Image from "./Images";
import Tools from "../Tools/Tools";
function Skills(props) {
  return (
    <div className="skills-container">
      <div className="skills-heading">
        <h1>
          My<p className="skills-heading-1">Skills</p>
        </h1>
      </div>
      <div className="skills-grid">
        <div>
          <Image path={React} desc={"React"} />
        </div>
        <div>
          <Image path={javascript} desc={"Javascript"} />
        </div>
        <div>
          <Image path={css} desc={"CSS"}></Image>
        </div>
        <div>
          <Image path={Html} desc={"HTML"} />
        </div>
        <div>
          <Image path={python} desc={"Python"}></Image>
        </div>
        <div>
          <Image path={fastapi} desc={"FastApi"} className="fastapi"></Image>
        </div>
        <div>
          <Image path={sql} desc={"Sql"} className="sql"></Image>
        </div>
        <div>
          <Image path={materialui} desc={"MaterialUi"}></Image>
        </div>
      </div>
      {/* <div>
        <Tools></Tools>
      </div> */}
    </div>
  );
}
export default Skills;
