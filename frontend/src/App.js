import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./actions";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CreateTimer } from "./components/NewTimer/CreateTimer";
import { EditTimer } from "./components/EditTimer";

export const App = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          {auth ? <Dashboard /> : <Home />}
        </Route>
        <Route exact path="/timer/new" component={CreateTimer} />
        <Route exact path="/timer/edit/:id" component={EditTimer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
