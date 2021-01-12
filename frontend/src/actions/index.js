import axios from "axios";
import { FETCH_USER, FETCH_TIMERS } from "./types";

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchTimers = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/timers");
    dispatch({ type: FETCH_TIMERS, payload: res.data });
  };
};

export const fetchTimer = (id) => {
  return async (dispatch, getState) => {
    const res = await axios.get(`/api/timers/${id}`);
    dispatch({ type: FETCH_TIMERS, payload: res.data });
  };
};

export const submitTimer = (values, history) => {
  return async (dispatch, getState) => {
    const res = await axios.post("/api/timers", values);
    history.push("/");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const updateTimer = (id, values) => {
  return async (dispatch, getState) => {
    const res = await axios.put(`/api/timers/${id}`, values);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const editTimer = (id, values, history) => {
  return async (dispatch, getState) => {
    console.log(values);
    const res = await axios.put(`/api/timers/edit/${id}`, values);
    // history.push("/");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const deleteTimer = (id, history) => {
  return async (dispatch, getState) => {
    const res = await axios.delete(`/api/timers/delete/${id}`);
    history.go(0);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};
