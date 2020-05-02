import { useState, useEffect } from "react";

const API_KEY = "ad59de4eaf25a9c7fe74060a7bfb3244";

export const useMaps = (location: string) => {
  const [mapData, setMapData] = useState<null | any>(null);

  useEffect(() => {
    fetchCityWeatherData().then((data) => setMapData(data));
  }, []);

  return [mapData];
};

export const fetchCityWeatherData = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Delft&appid=${API_KEY}`
  ).then((response) => response.json());
};
