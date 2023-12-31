import React from "react";
import "./App.less";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
        <Route exact path={"/"} component={Main} />
        <Route path={"/card/:username/:reponame"} component={Card} />
        <Redirect to={'/'} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
