// Input.js
import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const {title, type, placeholder } = props;
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label} htmlFor={title}>
        {title}
      </label>
      <input
        ref={ref}
        className={classes.inputField}
        type={type}
        name={title}
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;
