import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setShowMediaIcons(!showMediaIcons);
    handleMenuToggle();
  };
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={`navs ${colorChange ? "changecolor" : ""}`}>
      <div className={showMediaIcons ? "mobile-css" : "no-css"}>
        <ul className="navright">
          <li>
            <div>
              <Link to="/" onClick={handleLinkClick}>
                <AiOutlineHome
                  style={{ marginRight: "5px" }}
                  className="navic"
                />
                Home
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link to="/About" onClick={handleLinkClick}>
                <AiOutlineUser
                  style={{ marginRight: "5px" }}
                  className="navic"
                />
                About
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/Projects" onClick={handleLinkClick}>
                <AiOutlineFundProjectionScreen
                  style={{ marginRight: "5px" }}
                  className="navic"
                />
                Projects
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/Experience" onClick={handleLinkClick}>
                {/* <FontAwesomeIcon icon={faSuitcase} /> */}
                <BusinessCenterOutlinedIcon
                  style={{ marginRight: "5px" }}
                  className="navic"
                />
                Experience
              </Link>
            </div>
          </li>
          <li>
            <div>
              <a>
                <CgFileDocument
                  style={{ marginRight: "5px" }}
                  className="navic"
                />
                Resume
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="hamburger-container">
        <div
          className="hamburger-menu"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          {showMediaIcons ? <GiCancel /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  );
}
