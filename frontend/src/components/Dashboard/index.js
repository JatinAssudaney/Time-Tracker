import React from "react";
import Timer from "../Timer";
import { Button } from "../NewTimer/Button";
import { SearchBar } from "../SearchBar";
import "./styles/Dashboard.css";

export const Dashboard = (props) => {
  const timerList = [
    {
      id: "1",
      title: "Swiggy",
      tags: ["Frontend", "Hiring", "Virtual Test"],
      elapsedTime: 0,
      dateCreated: "",
    },
    {
      id: "2",
      title: "DBS",
      tags: ["Frontend", "Virtual Test", "Hackerrank"],
      elapsedTime: 1000,
      dateCreated: "",
    },
    {
      id: "3",
      title: "Infosys",
      tags: ["Placed", "FA2", "DBMS"],
      elapsedTime: 23456,
      dateCreated: "",
    },
  ];
  return (
    <>
      <SearchBar />
      {timerList.map((timer) => {
        return <Timer key={timer.id} {...timer} />;
      })}
      <Button />
    </>
  );
};

export default Dashboard;
