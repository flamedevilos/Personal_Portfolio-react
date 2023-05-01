import React from "react";
import { Link } from "react-router-dom";
import DynamicWeb from "../../../img/dynamic_Web.png";
import PortfolioWeb from "../../../img/Dynamic_Portfolio.png";

export const ProjectsSection = () => {
  return (
    <>
      <section className="project-section">
        <div className="card">
          {/* img goes here */}
          <img src={DynamicWeb} alt="dynamicWeb" />
          <h2>Dynamic Website</h2>
          <div className="text-box">
            <p>
              This is a Dynamic Website with HTML, CSS & JS. Background display
              a short-clip-video
            </p>
            <p>
              &#x1F449;{" "}
              <Link to="https://github.com/flamedevilos/DynamicWeb">
                https://github.com/flamedevilos/DynamicWeb
              </Link>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={PortfolioWeb} alt="dynamicPortfolio" />
          <h2>Dynamic Portfolio</h2>
          <div className="text-box">
            <p>This is a Dynamic Portfolio with HTML, CSS & JS</p>
            <p>
              &#x1F449;{" "}
              <Link to="https://github.com/flamedevilos/personal_portfolio">
                https://github.com/flamedevilos/personal_portfolio
              </Link>
            </p>
          </div>
        </div>

        <div className="note">
          &#x1F449;{" "}
          <Link to="https://github.com/flamedevilos">
            To see more projects...
          </Link>
        </div>
      </section>
    </>
  );
};
