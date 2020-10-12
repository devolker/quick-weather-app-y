import React from "react";
import styles from "./App.module.scss";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { Paths } from "./constants/routes";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <header className={styles.header}>
          <Link to={Paths.HOME} className={styles.link}>
            Home
          </Link>
          <Link to={Paths.CITY_WEATHER} className={styles.link}>
            City weather
          </Link>
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
