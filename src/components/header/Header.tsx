import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { Paths } from "../../constants/routes";

const Header = () => (
  <header className={styles.root}>
    <Link to={Paths.HOME} className={styles.link}>
      Home
    </Link>
    <Link to={Paths.CITY_WEATHER} className={styles.link} id="cityWeatherPage">
      City weather
    </Link>
  </header>
);

export default Header;
