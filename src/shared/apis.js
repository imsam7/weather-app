import { serviceHelper } from './util/serviceHelper';

// All api calls

export const getIP = () => {
    return serviceHelper.get("https://api.ipify.org/?format=json")
}

export const getUserCity = (ip) => {
    return serviceHelper.get("https://ipinfo.io/" + ip + "?token=6dcd47678854be")
}

export const getWeather = (cityName) => {
    return serviceHelper.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=59134621c7de17186764ccbd9b558499")
}