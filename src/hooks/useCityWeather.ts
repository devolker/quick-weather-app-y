import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "store";
import { cityWeatherGetAction } from "store/city-weather/cityWeatherActions";

type UseCityWeather = (
  location: string
) => [string | undefined, number | undefined];

export const useCityWeather: UseCityWeather = (location) => {
  const dispatch = useDispatch();

  const temp = useSelector<StoreState, number | undefined>(
    (state) => state.cityWeather.cityWeatherData.temp
  );
  const icon = useSelector<StoreState, string | undefined>(
    (state) => state.cityWeather.cityWeatherData.icon
  );

  useEffect(() => {
    dispatch(cityWeatherGetAction(location));
  }, [location, dispatch]);

  return [icon, temp];
};
