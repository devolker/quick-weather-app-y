import React from "react";
import { Now } from "components/Now";
import { useCityWeather } from "hooks/useCityWeather";
import Temperature from "components/Temperature";
import PageLayoutFullWidth from "components/page-templates/PageLayoutFullWidth";

const CityWeather = () => {
  const [temp] = useCityWeather("Delft");
  return (
    <PageLayoutFullWidth
      title="Delft weather"
      description="Shows time and temperature"
    >
      <Now id="nowDate" />
      <br />
      {temp && <Temperature temp={temp} id="cityWeatherTemperature" />}
    </PageLayoutFullWidth>
  );
};

export default CityWeather;
