import React from "react";
import Timer from "../Timer";

function Dashboard() {
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
      {timerList.map((timer) => {
        return <Timer key={timer.id} {...timer} />;
      })}
    </>
  );
}

export default Dashboard;
