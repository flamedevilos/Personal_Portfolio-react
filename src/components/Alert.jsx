import "./Alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Alert() {
  const [closeBtn, setCloseBtn] = useState(false);

  const closeAlert = () => {
    setCloseBtn(!closeBtn);
  };

  return (
    <>
      {" "}
      <>
        <div>
          <div className="alert">
            <FontAwesomeIcon icon={faCheck} className="alert-icon-success" />{" "}
            <span>Success!,</span>
            <p>Request has beeen send.</p>
            <button>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "red" }}
                onClick={closeAlert}
              />
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default Alert;
