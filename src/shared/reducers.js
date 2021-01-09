import { combineReducers } from 'redux';
import userCityReducer from './state/userCity/reducer';
import weatherReducer from './state/weather/reducer';

const appReducer = combineReducers({
    userCity: userCityReducer,
    weather: weatherReducer
});

const rootReducer = (state = {}, action) => {
    if (action.type === 'RESET_STATE') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;