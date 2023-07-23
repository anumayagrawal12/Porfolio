import React from "react";
import "./Projects.css";
import imge from "./imge.png";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
export default function ProjectCard(props) {
  return (
    <div className="projectcard">
      <div className="cardhead">
        <img src={props.link}></img>
      </div>
      <div className="cardcontent">
        <div className="cardcontenthead">{props.heading}</div>
        {props.description}
      </div>
      <div className="cardbutton">
        <div className="rotate">
          <a href={props.githublink} className="buttonx">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <button className="buttonc">
              <BsGithub className="icon" />
              Github
            </button>
          </a>
        </div>
        <div className="rotate">
          <a href={props.demolink} className="buttonx">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <button className="buttonc">
              <CgWebsite className="icon" />
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
