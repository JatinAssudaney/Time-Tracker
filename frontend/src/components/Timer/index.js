import React from "react";
import useTimer from "../../hooks/useTimer";
import { formatTime } from "../../utils/formatTime";
import { renderTags } from "../../utils/renderTags";
import "./styles/Timer.css";

function Timer({ _id, title, tags, elapsedTime }) {
  const {
    handleStart,
    handlePause,
    handleReset,
    handleResume,
    handleEdit,
    handleDelete,
    isActive,
    isPaused,
    time,
  } = useTimer(elapsedTime);

  return (
    <div className="timer">
      <h3 className="timer__heading">{title}</h3>
      <div className="timer__tags">{renderTags(tags)}</div>
      <div className="timer__elapsedTime">
        <p>{formatTime(time)}</p>
        <div className="timer__buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={() => handlePause(_id, title, time, tags)}>
              Pause
            </button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button
            onClick={() => handleReset(_id, title, 0, tags)}
            disabled={!isActive}
          >
            Reset
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="edit"
        onClick={() => handleEdit(_id, title, time, tags)}
      >
        EDIT
      </button>
      <button
        type="submit"
        className="delete"
        onClick={() => handleDelete(_id)}
      >
        DELETE
      </button>
    </div>
  );
}

export default Timer;
