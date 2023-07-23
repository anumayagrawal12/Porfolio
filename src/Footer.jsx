import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerf">
        <span>Developed By Anumay Agrawal</span>
      </div>
      <div className="footers">
        <span>Copyright 2023 AA</span>
      </div>
      <div className="footert">
        <ul className="icons">
          <li>
            <a href="https://github.com/anumayagrawal12">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/anumayagrawal?igshid=NGExMmI2YTkyZg==">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anumay-agrawal-38b880227">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
