import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import formFields from "./formFields";
import TimerField from "./TimerField";
import "./PostForm.css";
import { submitTimer } from "../../../../actions";

export const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const values = useSelector((state) => state.form.timerForm.values);
  const renderFields = () => {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={TimerField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  };

  const renderButton = (values) => {
    if (values) {
      const { title, tags } = values;
      if (title && tags) {
        return (
          <button type="submit" className="submit">
            Add Timer
          </button>
        );
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitTimer(values, history));
  };

  return (
    <form className="timerCreate__container" onSubmit={handleSubmit}>
      {renderFields()}
      {renderButton(values)}
    </form>
  );
};

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      const text = name.toUpperCase();
      errors[name] = `You must provide a ${text}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "timerForm",
})(Form);
