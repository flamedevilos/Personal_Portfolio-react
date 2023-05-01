import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <p>
          Created By
          <Link to="/home">Mohamed Chakib Mastouri</Link> |{" "}
          <span>
            <FontAwesomeIcon
              icon={faCopyright}
              style={{ background: "transparent" }}
            />
          </span>{" "}
          2023 All rights reserved.
        </p>
      </footer>
    </>
  );
};
