import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from './actionTypes'

const initialState = {
    loading: true,
    weather: {},
    error: null
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                loading: true
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                weather: action.data
            };
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                weather: null
            };
        default:
            return state;
    }
}

export default weatherReducer;