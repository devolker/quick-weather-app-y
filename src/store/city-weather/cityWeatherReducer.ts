import {
  RequestCityWeatherActionTypes,
  CityWeatherAction,
} from "./cityWeatherActions";
import { CityWeatherData } from "../../model/cityWeather";

export interface CityWeatherState {
  cityWeatherData: CityWeatherData;
}

const initialState: CityWeatherState = {
  cityWeatherData: { main: { temp: undefined } },
};

export const cityWeatherReducer = (
  state = initialState,
  action: CityWeatherAction
): CityWeatherState => {
  switch (action.type) {
    case RequestCityWeatherActionTypes.REQUEST:
      return { ...state };
    case RequestCityWeatherActionTypes.REQUEST_SUCCEEDED:
      return { ...state, cityWeatherData: action.payload.data };
    case RequestCityWeatherActionTypes.REQUEST_FAILED:
      return { ...state };
    case RequestCityWeatherActionTypes.CLEAR:
      return { ...state };
    default:
      return state;
  }
};
