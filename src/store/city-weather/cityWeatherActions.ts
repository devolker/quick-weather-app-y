import { Action } from "redux";
import { CityWeatherData } from "model/cityWeather";

export enum RequestCityWeatherActionTypes {
  REQUEST = "@@city-weather/REQUEST",
  REQUEST_SUCCEEDED = "@@city-weather/REQUEST_SUCCEEDED",
  REQUEST_FAILED = "@@city-weather/REQUEST_FAILED",
  CLEAR = "@@city-weather/CLEAR",
}

export interface CityWeatherGetAction
  extends Action<RequestCityWeatherActionTypes.REQUEST> {
  payload: { location: string };
}

export interface CityWeatherRequestSucceededAction
  extends Action<RequestCityWeatherActionTypes.REQUEST_SUCCEEDED> {
  payload: { data: CityWeatherData };
}

export const cityWeatherGetAction = (
  location: string
): CityWeatherGetAction => ({
  type: RequestCityWeatherActionTypes.REQUEST,
  payload: { location },
});

export const cityWeatherGetSucceededAction = (
  data: CityWeatherData
): CityWeatherRequestSucceededAction => {
  return {
    type: RequestCityWeatherActionTypes.REQUEST_SUCCEEDED,
    payload: { data },
  };
};

export const cityWeatherGetFailedAction = (): Action<
  RequestCityWeatherActionTypes.REQUEST_FAILED
> => {
  return {
    type: RequestCityWeatherActionTypes.REQUEST_FAILED,
  };
};

export type CityWeatherAction =
  | CityWeatherGetAction
  | CityWeatherRequestSucceededAction
  | Action<RequestCityWeatherActionTypes.REQUEST_FAILED>
  | Action<RequestCityWeatherActionTypes.CLEAR>;
