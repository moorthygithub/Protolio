import React from "react";
import "./About.css";
import Svg from "./svg";
import Skills from "../Skillsfolder/Skills";
import Tools from "../Tools/Tools";

function About() {
  return (
    <div className="about-container">
      <div className="education-section">
        <h2 className="education">
          {""}
          My <p className="education-degree">Education</p>
        </h2>
        <div className="education-section-in">
          <div className="icon-1">
            <Svg />
            <h2>Full Stack Python</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio harum culpa omnis obcaecati iure! Reprehenderit illo
              libero tenetur enim eveniet, nisi similique illum excepturi, velit
              a commodi laudantium necessitatibus molestiae!
            </p>
          </div>
          <div className="icon-1">
            <Svg />
            <h2>Bachelor Of Engineeing</h2>
            <p>
              Cummulating my bachelor in Electronics and Instrumentation in
              Bannari Amman Institue Of Technology in Sathymangalam Erode .I
              secured a CGPA 8.49 in 2019-2023 batch{" "}
            </p>
          </div>
          <div className="icon-2">
            <Svg />
            <h2 className="icon-2-h">
              HSC 12<p className="icon-2-p">th</p>
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ex similique quos exercitationem enim nam distinctio! Porro, nam
              debitis maxime quo voluptatibus, perferendis, voluptate itaque
              sapiente rem neque in ullam?
            </p>
          </div>
          <div className="icon-3">
            <Svg />
            <h2 className="icon-3-h">
              SSLC 10<p className="icon-3-p">th</p>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nihil eius accusamus sint quidem, sapiente quia illum qui odit
              accusantium quibusdam error repudiandae laborum beatae.
              Exercitationem delectus nostrum doloremque neque.
            </p>
          </div>
        </div>
        <Skills />
        <Tools></Tools>
      </div>
    </div>
  );
}

export default About;
