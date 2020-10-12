import React from "react";
import styles from "./App.module.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import { Paths } from "./constants/routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />
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
