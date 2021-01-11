import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import timerReducer from "./timerReducer";
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  timers: timerReducer,
});
