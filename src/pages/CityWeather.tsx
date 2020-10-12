import React from "react";
import { Now } from "../components/Now";
import { useCityWeather } from "../hooks/useCityWeather";
import Temperature from "../components/Temperature";

const CityWeather = () => {
  const [temp] = useCityWeather("Delft");
  return (
    <div>
      <Now />
      <br />
      {typeof temp !== "number" ? (
        "No temperature"
      ) : (
        <Temperature temp={temp} />
      )}
    </div>
  );
};

export default CityWeather;
