import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  const handleClick = () => {
    setNavMenu(!navMenu);
  };
  return (
    <>
      <nav className={navMenu ? "nav stretched" : "nav"}>
        <h2 to="/home" className="logo">
          Port.<span>folio</span>
        </h2>

        <ul>
          <NavLink to="/home">
            <span className="icons">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </NavLink>

          <NavLink to="/about">
            <span className="icons">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            About
          </NavLink>

          <NavLink to="/contact">
            <span className="icons">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            Contact
          </NavLink>
        </ul>

        <button className="nav-menu" onClick={handleClick}>
          {navMenu ? (
            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          )}
        </button>
      </nav>
    </>
  );
}
