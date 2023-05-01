import React from "react";
import { SkillsBars } from "../../../components/SkillsBars";

export const SkillSection = () => {
  return (
    <>
      {" "}
      <section className="skills-section">
        {" "}
        <h2>
          Skills &<span> experiences</span>
        </h2>
        <p>
          {" "}
          Problems solving or to be creative, i have the ability in new
          defferent approche & open-mindedness to generate new & unexpected
          ideas. And through the amount of services process come the
          experiences...
        </p>
        <div className="skills">
          {" "}
          <h2>SkillsBars</h2>
          <ul>
            <li>
              {" "}
              <h5>HTML</h5>
              <SkillsBars bar="80" />
              <span>80%</span>
            </li>
            <li>
              {" "}
              <h5>CSS</h5>
              <SkillsBars bar="70" />
              <span>70%</span>
            </li>
            <li>
              {" "}
              <h5>PHP</h5>
              <SkillsBars bar="70" />
              <span>70%</span>
            </li>
            <li>
              {" "}
              <h5>JavaScript</h5>
              <SkillsBars bar="70" />
              <span>70%</span>
            </li>
            <li>
              {" "}
              <h5>MySQL</h5>
              <SkillsBars bar="80" />
              <span>80%</span>
            </li>
            <li>
              {" "}
              <h5>Maintenance</h5>
              <SkillsBars bar="90" />
              <span>90%</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
