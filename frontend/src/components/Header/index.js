import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SearchIcon from "./search.svg";
import Logo from "./logo.svg";
import "./styles/Header.css";

export const Header = (props) => {
  const renderContent = () => {
    switch (props.auth) {
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
        <p className="logo__title">Your Time</p>
      </Link>
      <div className="search">
        <input type="text" className="search__posts" />
        <img src={SearchIcon} alt="search-icon" className="search__icon" />
      </div>
      <div className="nav-links">{renderContent()}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
