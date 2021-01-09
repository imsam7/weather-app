import { call, put, takeLatest } from 'redux-saga/effects'
import { getWeather } from '../../apis';
import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from './actionTypes'

//Generator function
function* weatherDetails(action) {
    try {
        const response = yield call(getWeather, action.payload.city);
        yield put({ type: GET_WEATHER_SUCCESS, data: response })
    }   
    catch (error) {
        yield put({ type: GET_WEATHER_FAILURE, data: error })
    }
}

export function* weatherSaga() {
    yield takeLatest(GET_WEATHER, weatherDetails);
}