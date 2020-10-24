import {
  CityWeatherAction,
  RequestCityWeatherActionTypes,
} from "./cityWeatherActions";

export interface CityWeatherState {
  cityWeatherData: { temp?: number; icon?: string };
}

const initialState: CityWeatherState = {
  cityWeatherData: { temp: undefined, icon: undefined },
};

export const cityWeatherReducer = (
  state = initialState,
  action: CityWeatherAction
): CityWeatherState => {
  switch (action.type) {
    case RequestCityWeatherActionTypes.REQUEST:
      return { ...state };
    case RequestCityWeatherActionTypes.REQUEST_SUCCEEDED:
      return {
        ...state,
        cityWeatherData: {
          temp: action.payload.data.main.temp,
          icon: action.payload.data.weather[0].icon,
        },
      };
    // return { ...state, cityWeatherData: action.payload.data };
    case RequestCityWeatherActionTypes.REQUEST_FAILED:
      return { ...state };
    case RequestCityWeatherActionTypes.CLEAR:
      return { ...state };
    default:
      return state;
  }
};
