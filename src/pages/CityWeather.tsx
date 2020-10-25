import { Now } from "components/Now";
import PageLayout from "components/page-templates/PageLayout";
import PageHeader from "components/PageHeader";
import Temperature from "components/Temperature";
import WeatherIcon from "components/weather-icon/WeatherIcon";
import { useCityWeather } from "hooks/useCityWeather";
import React from "react";

const CityWeather = () => {
  const [icon, temp] = useCityWeather("Delft");
  return (
    <PageLayout backgroundColor="#2f96b2" textColor="#ffffff">
      <PageHeader title="City Weather" description="lorem ipsum" />
      <Now id="nowDate" />
      <br />
      {temp && <Temperature temp={temp} id="cityWeatherTemperature" />}
      {icon && <WeatherIcon icon={icon} />}
    </PageLayout>
  );
};

export default CityWeather;
