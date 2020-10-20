import {
  CityWeatherGetAction,
  cityWeatherGetSucceededAction,
  cityWeatherGetFailedAction,
  RequestCityWeatherActionTypes,
} from "./cityWeatherActions";
import { retry, call, put, takeEvery, all } from "redux-saga/effects";
import { CityWeatherData } from "model/cityWeather";

export const fetchCityWeatherData = async (location: string) => {
  const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherApiKey}`
  );
  return response;
};

export function* getCityWeather({
  payload: { location },
}: CityWeatherGetAction) {
  try {
    const response = yield retry(3, 200, fetchCityWeatherData, location);
    if (response.status === 200) {
      const json: CityWeatherData = yield call(parseJsonResponse, response);
      yield put(cityWeatherGetSucceededAction(json));
    } else {
      yield put(cityWeatherGetFailedAction());
    }
  } catch (e) {
    yield put(cityWeatherGetFailedAction());
  }
}

export function* watchCityWeatherGet() {
  yield takeEvery(RequestCityWeatherActionTypes.REQUEST, getCityWeather);
}

export function* cityWeatherSagas() {
  yield all([watchCityWeatherGet()]);
}

const parseJsonResponse = (response: {
  json: () => Promise<any>;
}): Promise<any> => response.json();
