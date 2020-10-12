import React from "react";
import { kelvinToCelsius } from "../helpers/kelvinToCelsius";

interface TemperatureProps {
  temp?: number;
}

const Temperature = ({ temp }: TemperatureProps) => {
  if (temp) {
    return <p>Celsius: {kelvinToCelsius(temp)}</p>;
  }
  return null;
};

export default Temperature;
