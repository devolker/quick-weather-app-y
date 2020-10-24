export interface CityWeatherData {
  main: { temp?: number };
  weather: {
    0: {
      icon: string;
    };
  };
}

export interface CityWeatherIconData {
  icon: string;
}
