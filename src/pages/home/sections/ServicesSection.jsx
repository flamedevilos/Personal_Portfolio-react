import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faGears,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  return (
    <>
      <section className="service-section">
        <div className="card">
          <FontAwesomeIcon
            icon={faSitemap}
            className="pic-project"
            style={{ color: "crimson" }}
          />
          <h2>
            Web. <span>Developement</span>
          </h2>
          <div className="text-box">
            <p>
              Build | develope application with new architecture & design.{" "}
              <Link to="#">To read more...</Link>
            </p>
          </div>
        </div>

        <div className="card">
          <FontAwesomeIcon
            icon={faDesktop}
            className="pic-project"
            style={{ color: "greenyellow" }}
          />
          <h2>
            App. <span>Developement</span>
          </h2>
          <div className="text-box">
            <p>
              Searching the issues | providing a solution New design with
              innovative ideas. <Link to="#">To read more...</Link>
            </p>
          </div>
        </div>

        <div className="card">
          <FontAwesomeIcon
            icon={faGears}
            className="pic-project"
            style={{ color: "lightblue" }}
          />
          <h2>Maintenance</h2>
          <div className="text-box">
            <p>
              Maintenance Hardware & Software. PC Montage & configuration.{" "}
              <Link to="#">To read more...</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
