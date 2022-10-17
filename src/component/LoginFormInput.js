import React, { useState } from "react";
import "./LoginFormInputStyles.css";

const LoginFormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form-outline mb-4">
      <label className="form-label" for="form2Example27">
        {label}
      </label>
      <input
        id="form2Example27"
        className="form-control form-control-lg"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="errorMsg">{errorMessage}</span>
    </div>
  );
};

export default LoginFormInput;
