import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserCity } from '../../apis';
import { GET_USERCITY, GET_USERCITY_SUCCESS, GET_USERCITY_FAILURE } from './actionTypes'

//Generator function
function* userCityDetails(action) {
    try {
        const response = yield call(getUserCity, action.payload.userName);
        yield put({ type: GET_USERCITY_SUCCESS, data: response })
    }   
    catch (error) {
        yield put({ type: GET_USERCITY_FAILURE, data: error })
    }
}

export function* userCitySaga() {
    yield takeLatest(GET_USERCITY, userCityDetails);
}