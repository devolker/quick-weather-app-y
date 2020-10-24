import React from "react";

interface WeatherIconProps {
  icon: string;
}

const WeatherIcon = ({ icon }: WeatherIconProps) => {
  return (
    <>
      {icon && (
        <img
          alt="Weather icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      )}
    </>
  );
};

export default WeatherIcon;
