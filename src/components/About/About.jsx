import React from "react";
import "./About.css";
import imga from "./imga.png";
import avt from "./avt.jpg";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiBootstrap,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJavascript1,
} from "react-icons/di";
export default function About() {
  return (
    <div className="aboutcolumn">
      <div className="aboutrow">
        <div className="aboutrow1">
          <div className="aboutinner1">
            <h1>
              Know About<span className="g"> ME</span>
            </h1>
          </div>
          <div className="aboutinner2">
            <div className="innerinner">
              Hi Everyone. Myself <span className="g">Anumay Agrawal</span> from{" "}
              <span className="g">Ambikapur,chhattisgarh India</span>
            </div>
            <div className="innerinner">
              Currently I'M doing B.Tech in Computer Science from{" "}
              <span className="g">
                National Institute of Technology, Raipur
              </span>
            </div>
            <div className="innerinner">
              {" "}
              I am constantly seeking new challenges and opportunities to expand
              my knowledge and skill set.
              <br /> Whether it's collaborating with a team or working
              independently, I bring enthusiasm, adaptability, and a keen eye
              for detail to every project I undertake.
              <br /> Welcome to my portfolio, where you can explore my work and
              witness my passion for all things development.
            </div>
          </div>
        </div>
        <div className="aboutimg">
          <img src={avt}></img>
        </div>
      </div>
      <div className="aboutcolumnicon">
        <div>
          <h2>
            My <span className="g"> Skill Set</span>
          </h2>
        </div>
        <div className="abouticon">
          <div className="techicon">
            <DiHtml5 className="skillicon" />
          </div>
          <div className="techicon">
            <DiCss3 className="skillicon" />
          </div>
          <div className="techicon">
            {/* <DiJavascript className="skillicon" /> */}
            <DiJavascript1 className="skillicon" />
          </div>
          <div className="techicon">
            <DiReact className="skillicon" />
          </div>
          <div className="techicon">
            <DiPython className="skillicon" />
          </div>
          <div className="techicon">
            <DiMysql className="skillicon" />
          </div>
          <div className="techicon">
            <DiBootstrap className="skillicon" />
          </div>
          <div className="techicon">
            <DiGit className="skillicon" />
          </div>
          <div className="techicon">
            <DiNodejs className="skillicon" />
          </div>
        </div>
      </div>
    </div>
  );
}
