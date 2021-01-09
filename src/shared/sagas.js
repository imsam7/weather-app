import { all } from 'redux-saga/effects'
import { userCitySaga } from './state/userCity/saga'
import { weatherSaga } from './state/weather/saga'

export default function* rootSaga() {
    yield all([
        userCitySaga(),
        weatherSaga()
    ]);
}