import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTimer, deleteTimer } from "../actions";

const useTimer = (initialState = 0) => {
  const [time, setTime] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handlePause = (id, title, elapsedTime, tags) => {
    const values = { title, elapsedTime, tags };
    dispatch(updateTimer(id, values));
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  const handleEdit = (id) => {
    history.push(`/timer/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTimer(id, history));
  };

  return {
    time,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handleEdit,
    handleDelete,
  };
};

export default useTimer;
