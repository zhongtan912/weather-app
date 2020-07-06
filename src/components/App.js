import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./home/HomePage";
// import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
