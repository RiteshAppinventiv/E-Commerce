import React, { useState } from "react";
import "./LoginFormInputStyles.css";

const SignUpFormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="d-flex flex-row align-items-center mb-4">
      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
      <div className="form-outline flex-fill mb-0">
      <label className="form-label" for="form3Example4cd">{label}</label>
        <input
          id="form3Example1c"
          className="form-control form-control-sm"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span className='errorMsg'>{errorMessage}</span>
      </div>
    </div>
  );
};

export default SignUpFormInput;
