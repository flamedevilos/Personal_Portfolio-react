import React from "react";
import "./Preloader.css";

export const Preloader = () => {
  return (
    <>
      <div className="loader">
        <div className="ring1"></div>
        <div className="ring1"></div>
        <div className="ring1"></div>
        <span>Loading...</span>
      </div>
    </>
  );
};
