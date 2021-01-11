import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import { Header } from "./components/Header";

export const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
