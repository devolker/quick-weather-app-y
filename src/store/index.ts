import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  cityWeatherReducer,
  CityWeatherState,
} from "./city-weather/cityWeatherReducer";
import { cityWeatherSagas } from "./city-weather/cityWeatherSaga";

export interface StoreState {
  cityWeather: CityWeatherState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers<StoreState>({
  cityWeather: cityWeatherReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(cityWeatherSagas);

export default store;
