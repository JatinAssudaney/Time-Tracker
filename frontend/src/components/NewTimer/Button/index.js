import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Add from "./plus.svg";
import "./styles/NewTimer.css";

export const Button = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {auth ? (
        <button className="timer__create">
          <Link to="/timer/new" className="timer__create-link">
            <img src={Add} alt="Create Timer" className="timer__create--icon" />
          </Link>
        </button>
      ) : null}
    </div>
  );
};
