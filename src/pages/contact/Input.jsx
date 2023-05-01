import React from "react";

export const Input = (props) => {
  const { placeholder, icon, name, label } = props;
  return (
    <>
      {" "}
      <div className="item-disp">
        <label>
          <span>icon </span> {label} *
        </label>
        <input placeholder={placeholder} />
        <div className="input-error">error</div>
      </div>
    </>
  );
};
