import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cityWeatherGetAction } from "../store/city-weather/cityWeatherActions";
import { StoreState } from "../store";

type UseCityWeather = (location: string) => [number | undefined];

export const useCityWeather: UseCityWeather = (location: string) => {
  const dispatch = useDispatch();

  const temp = useSelector<StoreState, number | undefined>(
    (state) => state.cityWeather.cityWeatherData.main.temp
  );
  useEffect(() => {
    dispatch(cityWeatherGetAction(location));
  }, [location, dispatch]);

  return [temp];
};
