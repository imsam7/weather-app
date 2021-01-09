import { serviceHelper } from './util/serviceHelper';

// All api calls
export const getUserCity = (userName) => {
    return serviceHelper.get("http://ip-api.com/json")
}

// export const getWeather = (userName) => {
//     return serviceHelper.get("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=London&appid=59134621c7de17186764ccbd9b558499")
// }

export const getWeather = (userName) => {
    fetch("https://andruxnet-world-cities-v1.p.rapidapi.com/?query=paris&searchby=city", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "53c0dc0908mshb4c43628b89d679p1f19a0jsnc19c261b1858",
            "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}

