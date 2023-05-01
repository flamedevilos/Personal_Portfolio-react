import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Foto from "../../../img/personal_foto.png";

export const PreSection = () => {
  return (
    <>
      <section className="pre-section">
        <img src={Foto} alt="personal_foto" />

        <div className="description">
          {" "}
          <h2>
            I <span>Mohamed Chakib Mastouri</span>
          </h2>
          <p>
            {" "}
            I am a front- & back- end web developer & IT Technician. I can
            provide clean code that's make easily & understandable to read,
            debug and maintain applications. Before jumping headfirst into
            development or technical problems of cours i need to track the
            issues when they rise and then i can perform the required
            implementation or maintaining with innovative solution. I develope
            and build an interactive responsive website accessible to all users
            interfaces, regardless of their device with web animation.{" "}
            <Link to="/about">To read more...</Link>
          </p>
          <p>To Download my Resume please click in the section bellow</p>
          <div className="down-btn">
            {" "}
            <span>&#x1F449; </span>{" "}
            <button>
              <Link to="/about">
                Download Resume{" "}
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="down-icon"
                />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
