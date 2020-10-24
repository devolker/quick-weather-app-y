import { Now } from "components/Now";
import PageLayoutFullWidth from "components/page-templates/PageLayoutFullWidth";
import Temperature from "components/Temperature";
import WeatherIcon from "components/weather-icon/WeatherIcon";
import { useCityWeather } from "hooks/useCityWeather";
import React from "react";

const CityWeather = () => {
  const [icon, temp] = useCityWeather("Delft");
  return (
    <PageLayoutFullWidth
      title="Delft weather"
      description="Shows time and temperature"
    >
      <Now id="nowDate" />
      <br />
      {temp && <Temperature temp={temp} id="cityWeatherTemperature" />}
      {icon && <WeatherIcon icon={icon} />}
    </PageLayoutFullWidth>
  );
};

export default CityWeather;
