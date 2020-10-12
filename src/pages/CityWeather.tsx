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
      <Now />
      <br />
      {typeof temp !== "number" ? (
        "No temperature"
      ) : (
        <Temperature temp={temp} />
      )}
    </PageTemplate>
  );
};

export default CityWeather;
