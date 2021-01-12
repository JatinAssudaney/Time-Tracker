import React from "react";
import "./TimerField.css";

const TimerField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div className="timer-field">
      <label className="timer-field__label">{label}</label>
      <input {...input} type={type} className="timer-field__input" />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default TimerField;
