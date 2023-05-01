import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import CVEng from "../../pdf/CV_eng.pdf";
import CVfr from "../../pdf/CV_fr.pdf";
import CVD from "../../pdf/CV_d.pdf";
import CVar from "../../pdf/CV_ar.pdf";

export const PdfBtn = () => {
  return (
    <>
      <a href={CVEng} download={CVEng}>
        {" "}
        <button>
          Download Resume English{" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="down-icon" />
        </button>
      </a>
      <a href={CVfr} download={CVfr}>
        {" "}
        <button>
          Download Resume French{" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="down-icon" />
        </button>
      </a>
      <a href={CVD} download={CVD}>
        {" "}
        <button>
          Download Resume German{" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="down-icon" />
        </button>
      </a>

      <a href={CVar} download={CVar}>
        {" "}
        <button>
          Download Resume Arabic{" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} className="down-icon" />
        </button>
      </a>
    </>
  );
};
