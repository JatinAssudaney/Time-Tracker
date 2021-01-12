import React from "react";
import HeroImage from "./undraw_web_developer_p3e5.svg";
import Logo from "./logo.svg";
import "./styles/Hero.css";

export const Home = () => {
  return (
    <div className="hero__container">
      <div className="hero__about">
        Manage your time with{" "}
        <span className="hero__about--main-text">
          <img className="logo__icon" src={Logo} alt="your-time-tracker" />
          Your Time Tracker.
        </span>
      </div>
      <div className="hero__image">
        <img src={HeroImage} alt="web-developer" />
      </div>
    </div>
  );
};
