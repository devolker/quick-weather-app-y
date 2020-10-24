import { Now } from "components/Now";
import PageLayoutFullWidth from "components/page-templates/PageLayoutFullWidth";
import PageHeader from "components/PageHeader";
import Temperature from "components/Temperature";
import WeatherIcon from "components/weather-icon/WeatherIcon";
import { useCityWeather } from "hooks/useCityWeather";
import React from "react";

const CityWeather = () => {
  const [icon, temp] = useCityWeather("Delft");
  return (
    <PageLayoutFullWidth>
      <PageHeader title="City Weather" description="lorem ipsum" />
      <Now id="nowDate" />
      <br />
      {temp && <Temperature temp={temp} id="cityWeatherTemperature" />}
      {icon && <WeatherIcon icon={icon} />}
    </PageLayoutFullWidth>
  );
};

export default CityWeather;
