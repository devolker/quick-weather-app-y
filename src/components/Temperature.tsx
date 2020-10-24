import { kelvinToCelsius } from "helpers/kelvinToCelsius";
import React from "react";

interface TemperatureProps {
  id: string;
  temp: number;
}

const Temperature = ({ id, temp }: TemperatureProps) => {
  const temperatureInCelsiusDegrees = kelvinToCelsius(temp);
  return <p id={id}>Celsius: {temperatureInCelsiusDegrees}</p>;
};

export default Temperature;
