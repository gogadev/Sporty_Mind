import React from "react";

import "./form-button.styles.css";

const FormButton = ({ children, ...otherProps }) => {
  return (
    <>
      <button className="form-button" {...otherProps}>
        {children}
      </button>
    </>
  );
};

export default FormButton;
