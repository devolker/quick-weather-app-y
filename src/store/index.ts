import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  cityWeatherReducer,
  CityWeatherState,
} from "./city-weather/cityWeatherReducer";

export interface StoreState {
  cityWeather: CityWeatherState;
}

const rootReducer = combineReducers<StoreState>({
  cityWeather: cityWeatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store;
