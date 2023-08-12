import React from "react";
import "./App.less";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./main/Main";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path={"/"} component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
