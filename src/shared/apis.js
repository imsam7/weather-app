import { serviceHelper } from './util/serviceHelper';

// All api calls

export const getIP = () => {
    return serviceHelper.get("https://api.ipify.org/?format=json")
}

export const getUserCity = (ip) => {
    return serviceHelper.get("https://ipinfo.io/" + ip + ${APIkey})
}

export const getWeather = (cityName) => {
    return serviceHelper.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid" + ${APIkey})
}