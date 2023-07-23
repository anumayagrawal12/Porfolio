import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Theme from "../../Theme";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <div className="homepage">
      {/* <Theme /> */}
      <div className="home-p">
        <div className="home-content">
          <div className="chome1">
            <span>
              Hi There
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </span>
          </div>
          <div className="chome2">
            <span>
              I'M <span className="g">Anumay Agrawal</span>
            </span>
          </div>
          <div className="chome2">
            <span>
              Currently Studying as Undergraduate at{" "}
              <span className="g">NIT Raipur</span>
            </span>
          </div>
          <div className="homef g">
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "NLP Enthusiast",
                  "Frontend Developer",
                  "Competitive Programmer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>
        <div className="home-img">
          <img src="https://i.postimg.cc/CMnN24JG/img.jpg" className="imgs" />
        </div>
      </div>
      <div className="homebottom">
        <div className="homeb1">
          <span>Get In Touch</span>
        </div>
        <div className="homeb2">
          <span>Feel free to connect with Me</span>
        </div>
        <div className="homeb3">
          <ul className="homeicon">
            {/* <li className="homeic">
              <a href="https://github.com/anumayagrawal12">
                <AiFillGithub />
              </a>
            </li>
            <li className="homeic">
              <a href="https://instagram.com/anumayagrawal?igshid=NGExMmI2YTkyZg==">
                <AiFillInstagram className="insta" />
              </a>
            </li>
            <li className="homeic">
              <a href="https://www.linkedin.com/in/anumay-agrawal-38b880227">
                <FaLinkedinIn className="linke" />
              </a>
            </li> */}
            <li>
              <a href="https://github.com/anumayagrawal12">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <AiFillGithub />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anumay-agrawal-38b880227">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/anumayagrawal?igshid=NGExMmI2YTkyZg==">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <AiFillInstagram />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
