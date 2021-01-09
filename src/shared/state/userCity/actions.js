import { GET_USERCITY, GET_USERCITY_SUCCESS, GET_USERCITY_FAILURE } from './actionTypes'

export const loadUserCity = (payload) => ({ type: GET_USERCITY, payload });
export const loadUserCitySuccess = data => ({ type: GET_USERCITY_SUCCESS, data });
export const loadUserCityFailure = (error) => ({ type: GET_USERCITY_FAILURE, error });