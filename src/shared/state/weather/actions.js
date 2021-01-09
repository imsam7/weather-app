import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from './actionTypes'

export const loadWeather = (payload) => ({ type: GET_WEATHER, payload });
export const loadWeatheruccess = data => ({ type: GET_WEATHER_SUCCESS, data });
export const loadWeatherFailure = (error) => ({ type: GET_WEATHER_FAILURE, error });