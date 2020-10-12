import React from "react";
import { kelvinToCelsius } from "../helpers/kelvinToCelsius";

interface TemperatureProps {
  id: string;
  temp?: number;
}

const Temperature = ({ id, temp }: TemperatureProps) => {
  if (temp) {
    return <p id={id}>Celsius: {kelvinToCelsius(temp)}</p>;
  }
  return null;
};

export default Temperature;
