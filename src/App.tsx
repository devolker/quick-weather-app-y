import React from "react";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";

const PathsEnum = {
  HOME: "/",
  MAP: "/map",
};

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to={PathsEnum.HOME}>Home</Link>
            </li>
            <li>
              <Link to={PathsEnum.MAP}>Map</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path={PathsEnum.HOME}>
            <Home />
          </Route>
          <Route path={PathsEnum.MAP}>
            <Map />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
