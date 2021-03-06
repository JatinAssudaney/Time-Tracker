import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "./logo.svg";
import "./styles/Header.css";

export const Header = () => {
  const auth = useSelector((state) => state.auth);
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return [
          <a key="login" href="/auth/google" className="nav-links__link login">
            Login with Google
          </a>,
        ];
      default:
        return [
          <a key="logout" href="/api/logout" className="nav-links__link logout">
            Logout
          </a>,
        ];
    }
  };
  return (
    <nav className="nav__container">
      <Link to="/" className="logo">
        <img className="logo__icon" src={Logo} alt="webdevjourney" />
        <p className="logo__title">Your Time Tracker</p>
      </Link>

      <div className="nav-links">{renderContent()}</div>
    </nav>
  );
};

export default Header;
