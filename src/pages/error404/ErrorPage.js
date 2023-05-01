import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import Pic from "../../img/sadEmoji.png";

export const ErrorPage = () => {
  return (
    <>
      <section className="error-section">
        <div className="error-content">
          <h1>ERROR 404</h1>
          <img src={Pic} />
          <p>
            {" "}
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable. I do apologise on it's
            behalf.
          </p>
          <p>
            {" "}
            &#x1F449; Please try <Link to="/home">go back to the homepage</Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};
