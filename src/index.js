import React from "react";
import ReactDOM from "react-dom";
import GraphView from "./GraphView";
import ArcGraph from "./ArcGraph";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./fonts/fonts.css";

const App = () => (
  <Switch>
    <Route path="/graph-view" component={GraphView} />
    <Route path="/arc-graph" component={ArcGraph} />
    {/* <Route path="/list-view" component={ListView} /> */}
  </Switch>
);

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
