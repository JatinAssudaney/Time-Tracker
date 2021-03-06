import React from "react";
import { reduxForm } from "redux-form";
import Form from "./Form";

export const CreateTimer = () => {
  return (
    <div className="new-timer__container">
      <Form />
    </div>
  );
};

export default reduxForm({
  form: "timerForm",
})(CreateTimer);
