import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import { Button } from "../NewTimer/Button";
import SearchIcon from "./search.svg";
import "./styles/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimers } from "../../actions";

export const Dashboard = () => {
  let [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const timerList = useSelector((state) => state.timers);
  useEffect(() => {
    dispatch(fetchTimers());
  }, []);

  const renderContent = () => {
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      return timerList.map((timer) => {
        let title = timer.title.toLowerCase();
        if (title.indexOf(searchTerm) !== -1) {
          return <Timer key={timer._id} {...timer}></Timer>;
        } else {
          return null;
        }
      });
    } else {
      return timerList.map((timer) => {
        return <Timer key={timer._id} {...timer} />;
      });
    }
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search__posts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search-icon" className="search__icon" />
      </div>
      {renderContent()}
      <Button />
    </>
  );
};

export default Dashboard;
