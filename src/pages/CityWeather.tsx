import React from "react";
import { Now } from "../components/Now";
import { useCityWeather } from "../hooks/useCityWeather";
import Temperature from "../components/Temperature";
import PageTemplate from "../components/PageLayout";

const CityWeather = () => {
  const [temp] = useCityWeather("Delft");
  return (
    <PageTemplate
      title="Delft weather"
      description="Shows time and temperature"
    >
      <Now id="nowDate" />
      <br />
      {typeof temp !== "number" ? (
        "No temperature"
      ) : (
        <Temperature temp={temp} id="cityWeatherTemperature" />
      )}
    </PageTemplate>
  );
};

export default CityWeather;
