import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faMapLocationDot,
  faMobile,
  faPhone,
  faSnowman,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import Foto from "../../img/personal_foto.png";
import { PdfBtn } from "./PdfBtn";

export const About = () => {
  return (
    <>
      {" "}
      <section className="about-section">
        <h1>
          Curriclum <span>Vitae</span>
        </h1>
        <p>
          <span>&#x1F449;</span> Download my resume as PDF.
        </p>
        <div className="download-cv-btn">
          <PdfBtn />
        </div>

        <div className="data-info">
          <div className="personal-data">
            <h3 className="box-title">Personal Data</h3>
            <div className="pers-data">
              <ul className="list">
                <li className="item">
                  <FontAwesomeIcon icon={faUserAlt} className="icons" />{" "}
                  <span>Mohamed Chakib Mastouri</span>
                </li>
                <li className="item">
                  <FontAwesomeIcon icon={faMapLocationDot} className="icons" />{" "}
                  <span>Mierendorffstr. 57 04318 Leipzig. Germany</span>
                </li>
                <li className="item">
                  <FontAwesomeIcon icon={faSnowman} className="icons" />{" "}
                  <span>12 February 1983 Tunis. Tunisie</span>
                </li>
                <li className="item">
                  <FontAwesomeIcon icon={faMobile} className="icons" />{" "}
                  <span>+49(0)152 03788235</span>
                </li>
                <li className="item">
                  <FontAwesomeIcon icon={faPhone} className="icons" />{" "}
                  <span>+49(0)341 60406585</span>
                </li>
                <li className="item">
                  <FontAwesomeIcon icon={faAt} className="icons" />{" "}
                  <span>chroniquec@ymail.com / cmastouri00@gmail.com</span>
                </li>
              </ul>
              <img src={Foto} alt="personal_foto" />
            </div>
          </div>

          <div className="career-data">
            <h3 className="box-title">Professional Career</h3>
            <ul className="list">
              <li className="item">
                <span>2021 - 2022</span>
                <ul className="subList-item">
                  <span>PiSolution GmbH Markkleeberg.Germany</span>
                  <li>Web. Developer</li>
                  <li>Internship as IT specialist application developer</li>
                </ul>
              </li>

              <li className="item">
                <span>2008 - 2015</span>
                <ul className="subList-item">
                  <span>CHRONIQUE@ GmbH Tunis.Tunisie</span>
                  <li>IT Manager</li>
                  <li>
                    Buying- Selling- & Maintenance of Computer Hardware &
                    Software
                  </li>
                  <li>
                    Computer Technician (Hardware & Software), Sales & Account
                    Management
                  </li>
                </ul>
              </li>

              <li className="item">
                <span>2006 - 2008</span>
                <ul className="subList-item">
                  <span>Mezo Teleperformance Call Center Tunis. Tunisie</span>
                  <li>Teleoperateur (French Call Center)</li>
                  <li>Computer Technician & Client Services (Workshop)</li>
                </ul>
              </li>

              <li className="item">
                <span>2003 - 2006</span>
                <ul className="subList-item">
                  <span>
                    S.B.H.S.E GmbH (Construction Company) Ariana.Tunisie
                  </span>
                  <li>Projekt Manager</li>
                  <li>Computer Technician & Client Services (Workshop)</li>
                  <li>Administration Extension & Account Management</li>
                </ul>
              </li>

              <li className="item">
                <span>2000 - 2003</span>
                <ul className="subList-item">
                  <span>Bayrout Auto Station Tunis. Tunisie</span>
                  <li>Station Manager</li>
                  <li>Administration Extension & Account Management</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="Education-data">
            <h3 className="box-title">Formation & Education</h3>
            <ul className="list">
              <li className="item">
                <span>2019 - 2021</span>
                <ul className="subList-item">
                  <span>ciT Leipzig. Germany</span>
                  <li>Retraining (IHK) IT Application Development</li>
                  <li>
                    Diploma: Vocational training IT specialist application
                    development
                  </li>
                </ul>
              </li>

              <li className="item">
                <span>2018 - 2019</span>
                <ul className="subList-item">
                  <span>DAA Leipzig. Germany</span>
                  <li>Degree: B.2+ Professional german language</li>
                </ul>
              </li>
              <li className="item">
                <span>2017 - 2018</span>
                <ul className="subList-item">
                  <span>DAA & VMKB Leipzig. Germany</span>
                  <li>
                    Diploma: B.1+ Professional german language & Electronic data
                    processing
                  </li>
                </ul>
              </li>

              <li className="item">
                <span>2016 - 2017</span>
                <ul className="subList-item">
                  <span>Euro Schule Leipzig. Germany</span>
                  <li>Diploma: B.1 german language</li>
                </ul>
              </li>

              <li className="item">
                <span>2000- 2006</span>
                <ul className="subList-item">
                  <span>
                    USTT Université des Sciences & Technologies de Tunis Tunis.
                    Tunisie
                  </span>
                  <li>Main focus: M.I Mathematic applied in Informatic</li>
                  <li>
                    Degree: Bachelor (4 of 5 years (8 Semester) University)
                  </li>
                </ul>
              </li>

              <li className="item">
                <span>2005 - 2006</span>
                <ul className="subList-item">
                  <span>
                    IMSET Institut Maghrébin des Sciences Economiques et de
                    Technologie Tunis. Tunisie (Private University)
                  </span>
                  <li>Main focus: General Architecture</li>
                  <li>
                    Degree:: Bachelor (1 of 3 years (2 Semester) University)
                  </li>
                </ul>
              </li>

              <li className="item">
                <span>2001 - 2003</span>
                <ul className="subList-item">
                  <span>
                    IA Institut Africain (Private Institue) Tunis. Tunisie
                  </span>
                  <li>
                    Main focus: IT Technician (IT specialist in Hardware &
                    Software)
                  </li>
                  <li>Diploma: IT Technician</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="Knowledge-data">
            <h3 className="box-title">Knowledge & skills</h3>

            <div className="lang">
              {" "}
              <span>Foreign language</span>
              <ul className="list">
                <li>Francophone (Mother tongue)</li>
                <li>Arabic: speech and writing Niveau C.2</li>
                <li>French: speech and writing Niveau C.2</li>
                <li>English: speech and writing Niveau C.1</li>
                <li>German: expandable orally and in writing Niveau B.2+</li>
              </ul>
            </div>

            <div className="interes">
              <span>Interests and hobbies</span>
              <ul className="list">
                <li>Television: Series TV, Manga, Movies...</li>
                <li>Soccer</li>
                <li>Swimming</li>
                <li>Chess</li>
                <li>Video Games (Arcad & Adventure)</li>
                <li>Travel</li>
              </ul>
            </div>

            <div className="extra">
              <span>Driver's license</span>
              <li>class B from 2001</li>
            </div>
          </div>
        </div>
        <p>
          <span>&#x1F449;</span> Download my resume as PDF.
        </p>
        <div className="download-cv-btn">
          <PdfBtn />
        </div>
      </section>
    </>
  );
};
