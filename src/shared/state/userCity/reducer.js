import { GET_USERCITY, GET_USERCITY_SUCCESS, GET_USERCITY_FAILURE } from './actionTypes'

const initialState = {
    loading: true,
    userCityDetails: {},
    error: null
}

const userCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERCITY:
            return {
                ...state,
                loading: true
            };
        case GET_USERCITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userCityDetails: action.data
            };
        case GET_USERCITY_FAILURE:
            return {
                ...state,
                loading: true,
                error: action,
                userCityDetails: null
            };
        default:
            return state;
    }
}

export default userCityReducer;