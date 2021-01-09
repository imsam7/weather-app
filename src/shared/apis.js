import { serviceHelper } from './util/serviceHelper';

// All api calls
export const getUserCity = () => {
    return serviceHelper.get("http://ip-api.com/json")
}

export const getWeather = (cityName) => {
    return serviceHelper.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=59134621c7de17186764ccbd9b558499")
}