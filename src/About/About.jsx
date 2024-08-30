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
              Completed my Full Stack Python in Besant Technologies and i gain
              more Knowledege and done Web developement Project and Full stack
              project
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
              Completed my Higher Secondary school in Sri Vijay Vidhyalaya
              Matric school in Krishnagiri .I secured a 68.6 percentage in
              2017-2019 batch
            </p>
          </div>
          <div className="icon-3">
            <Svg />
            <h2 className="icon-3-h">
              SSLC 10<p className="icon-3-p">th</p>
            </h2>
            <p>
              Completed my Secondary school in Kingsley garden matric higher
              seondary school in kandikuppam ,Krishnagiri.I secured a 79
              percentage in 2016-2017 batch
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
