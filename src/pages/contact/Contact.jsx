import React, { useState, useRef } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faPenAlt,
  faPhone,
  faUserPen,
  faMessage,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";
import Alert from "../../components/Alert";

export const Contact = () => {
  const form = useRef();

  const [inputs, setInputs] = useState({
    sender_name: "",
    sender_email: "",
    sender_subject: "",
    message: "",
    checked: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [errorValid, setErrorValid] = useState({});

  const handleValidation = () => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputs.sender_name === "") {
      errors.sender_name = "Name is required.";
    } else if (inputs.sender_name.length < 3) {
      errors.sender_name = "Name must to be more than 3 characters.";
    }

    if (inputs.sender_email === "") {
      errors.sender_email = "Email is required.";
    } else if (!emailRegex.test(inputs.sender_email)) {
      errors.sender_email = "Email invalid. ";
    }

    if (inputs.sender_subject === "") {
      errors.sender_subject = "Subject is required.";
    } else if (inputs.sender_subject.length < 3) {
      errors.sender_subject = "Subject must to be more than 3 characters.";
    }

    if (inputs.message === "") {
      errors.message = "There is no Request!";
    } else if (inputs.message.length < 3) {
      errors.message = "Message must to be more than 3 characters.";
    }

    if (inputs.checked === false) {
      errors.checked = "Agreement is required!";
    }

    setErrorValid({ ...errors });
    return Object.keys(errors).length < 1;
  };

  const [load, setLoad] = useState(false);

  const [alertMsg, setAlertMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eyc72vp",
        "template_vqsusgi",
        form.current,
        "W4KyeBsX6lJoj6rKS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (!handleValidation()) {
      console.log("Fail");
    } else {
      handleValidation();
      setLoad(true);
      setAlertMsg(true);
    }
    e.target.reset();
  };

  setTimeout(() => {
    setLoad(false);
  }, 2000);

  setTimeout(() => {
    setAlertMsg(false);
  }, 4000);

  return (
    <>
      {" "}
      <section className="contact-section">
        <div className="contact-content">
          <div className="info">
            <span>
              <FontAwesomeIcon icon={faPhone} /> : +49 (0)152 03 788 235
            </span>{" "}
            <span>
              <FontAwesomeIcon icon={faAt} /> : chroniquec@ymail.com
            </span>
          </div>
          <h1>
            Contact{" "}
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </h1>
          <p className="parag">
            Send your request and i will be back to you soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div>{alertMsg ? <Alert /> : null} </div>

            <p className="note">
              <span>&#x1F449; </span> Fields with * is required.
            </p>

            <div className="item">
              <label>
                <FontAwesomeIcon icon={faUserPen} />
              </label>
              <input
                type="text"
                placeholder="Full name *"
                name="sender_name"
                onChange={handleChange}
              />
            </div>
            <div className="input-error">{errorValid.sender_name}</div>

            <div className="item">
              <label>
                <FontAwesomeIcon icon={faAt} />{" "}
              </label>
              <input
                type="email"
                name="sender_email"
                placeholder="example@mail.com *"
                onChange={handleChange}
              />
            </div>
            <div className="input-error">{errorValid.sender_email}</div>

            <div className="item">
              <label>
                <FontAwesomeIcon icon={faPenAlt} />
              </label>
              <input
                type="text"
                name="sender_subject"
                placeholder="About... *"
                onChange={handleChange}
              />
            </div>
            <div className="input-error">{errorValid.sender_subject}</div>

            <div className="msg">
              <label>
                <FontAwesomeIcon icon={faMessage} />
              </label>
              <textarea
                rows={8}
                cols={30}
                placeholder="Your request... *"
                name="message"
                onChange={handleChange}
              />
            </div>
            <div className="input-error">{errorValid.message}</div>

            <div className="check-box">
              <label>
                <input type="checkbox" name="checked" onChange={handleChange} />{" "}
                <span>
                  Agree, Contact Data privacy. This personal data informations
                  your entered will not be shared or published.
                </span>
              </label>
            </div>
            <div className="input-error">{errorValid.checked}</div>

            <button type="submit" className="animated-btn" disabled={load}>
              {load ? (
                <FontAwesomeIcon icon={faSpinner} className="spinner" />
              ) : (
                <>
                  Send{" "}
                  <FontAwesomeIcon icon={faPaperPlane} className="down-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
