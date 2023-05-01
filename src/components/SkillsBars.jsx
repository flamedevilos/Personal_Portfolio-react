import React, { useState } from "react";

export const SkillsBars = ({ bar }) => {
  const [barstyle, setBarstyle] = useState({});

  setTimeout(() => {
    const proBar = {
      opacity: 1,
      width: `${bar}%`,
    };
    setBarstyle(proBar);
  }, 500);
  return (
    <>
      <div className="skill-bar">
        <span className="prog-bar" style={barstyle}></span>
      </div>
    </>
  );
};
