import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

export const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header user={props.auth} />
        {props.auth ? <Dashboard /> : <Home />}
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
