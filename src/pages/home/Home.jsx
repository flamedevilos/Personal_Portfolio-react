import React from "react";
import "./Home.css";
import { PreSection } from "./sections/PreSection";
import { SkillSection } from "./sections/SkillSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="notification">
          <p>
            <span>
              {" "}
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            Thank you for visiting this portfolio's site. Its will be soon more
            update.
          </p>
        </div>
        <h1>
          Web. & App. <span>Development</span>
        </h1>
        <p>
          Welcome to my portfolio's website, is related to my workline. I
          provide services as front- & back- end web. developement and
          maintaining hardwares technicals issues.{" "}
          <Link to="/about">To read more...</Link>
        </p>
        <p className="direct">Scroll down &#x1F447;</p>
      </section>
      <PreSection />
      <SkillSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
};
