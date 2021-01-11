import React from "react";
import useTimer from "../hooks/useTimer";
import { formatTime } from "../utils/formatTime";
import { renderTags } from "../utils/renderTags";
// import "./Timer.css";

function Timer({ title, tags, elapsedTime }) {
  const {
    handleStart,
    handlePause,
    handleReset,
    handleResume,
    isActive,
    isPaused,
    time,
  } = useTimer(elapsedTime);

  return (
    <div className="timer">
      <h3 className="timer__heading">{title}</h3>

      <div className="timer__elapsedTime">
        <p>{formatTime(time)}</p>
        <div className="timer__buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
        <div className="timer__tags">{renderTags(tags)}</div>
      </div>
    </div>
  );
}

export default Timer;
