import React from "react";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { Paths } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to={Paths.HOME}>Home</Link>
            </li>
            <li>
              <Link to={Paths.CITY_WEATHER}>City weather</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path={Paths.HOME}>
            <Home />
          </Route>
          <Route path={Paths.CITY_WEATHER}>
            <CityWeather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
