import sun from '../../assets/img/sun.png'
import cloudy from '../../assets/img/cloudy.png'
import React, { useState } from 'react';

function WeatherHomeLayout({ weatherData }) {
    let sunriseTime = epochtoDate(weatherData.weather.city.sunrise)
    let sunsetTime = epochtoDate(weatherData.weather.city.sunset)
    var weatherDataDayWise = []
    for (var i = 0; i < weatherData.weather.list.length; i++) {
        if (i % 8 == 0) {
            weatherDataDayWise.push(weatherData.weather.list[i])
        }
    }
    const [showWeatherDetails, setShowWeatherDetails] = useState(weatherDataDayWise[0]);

    function sadsalement(index) {
        setShowWeatherDetails(weatherDataDayWise[index])
    }

    function epochtoDate(epoch) {
        let date1 = new Date(epoch * 1000);
        let date2 = date1.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
        return date2
    }

    function kelvinToCelcius(tempInKelvin) {
        return Math.round(tempInKelvin - 273.15)
    }

    function getForecast(forecast) {
        if (forecast == 'Rain')
            return 'Rainy'
        else if (forecast == 'Clear')
            return 'Sunny'
        else if (forecast == 'Clouds')
            return 'Cloudy'
    }

    // function getForecastImage(forecast) {
    //     // if (forecast == 'Rain')
    //     //     return Sun
    //     // else 
    //     if (forecast == 'Clear')
    //         return 'Sunny'
    //     else if (forecast == 'Clouds')
    //         return 'Cloudy'
    // }

    return (
        <div className="">
            <div className="demo">
                <div className="carousel">
                    {weatherDataDayWise.map((weatherDetails, index) => (
                        <div className="tablinks c-item" onClick={() => sadsalement(index)}>
                            <div>
                                <b>Mon</b><br />
                                <b>{kelvinToCelcius(weatherDetails.main.temp_max)}°C <span style={{ color: "rgb(167, 165, 165)" }}>{kelvinToCelcius(weatherDetails.main.temp_min)}°C </span></b><br />
                                {weatherDetails.weather[0].main == 'Clear' && <img src={sun} width="24px" height="25px" />}
                                {weatherDetails.weather[0].main == 'Clouds' && <img src={cloudy} width="24px" height="25px" />}
                                <br />
                                <b style={{ color: "rgb(167, 165, 165)" }}>{getForecast(weatherDetails.weather[0].main)}</b><br />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="Mon1" className="tabcontent">
                <div className="bodyOfdiv">
                    <div className="card">
                        <div className="about">
                            {/* <h3><b>{weatherData.weather.city.name}</b></h3> */}
                            <div style={{ display: "flex", flexWrap: "wrap" }}>

                                <h1 style={{ fontSize: "50px", marginTop: "0px", marginBottom: "0px", marginRight: "15px" }} >
                                    <b>{kelvinToCelcius(showWeatherDetails.main.temp)}°C</b></h1>

                                {showWeatherDetails.weather[0].main == 'Clear' && <img src={sun} style={{ height: "50px", width: "50px" }} />}
                                {showWeatherDetails.weather[0].main == 'Clouds' && <img src={cloudy} style={{ height: "50px", width: "50px" }} />}

                            </div>
                        </div>

                        <canvas id="canvas"></canvas>

                        <div className="axis">
                            <div className="tick">
                                <span className="day-number">10</span>
                                <span className="day-name">12pm</span>
                                <span className="value value--this">26°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">11</span>
                                <span className="day-name">1pm</span>
                                <span className="value value--this">14°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">12</span>
                                <span className="day-name">2pm</span>
                                <span className="value value--this">22°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">13</span>
                                <span className="day-name">3pm</span>
                                <span className="value value--this">12°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">14</span>
                                <span className="day-name">4pm</span>
                                <span className="value value--this">20°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">15</span>
                                <span className="day-name">5pm</span>
                                <span className="value value--this">12°C</span>
                            </div>
                            <div className="tick">
                                <span className="day-number">16</span>
                                <span className="day-name">6pm</span>
                                <span className="value value--this">18°C</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <div className="card" style={{ width: "50%", flex: "1", marginRight: "20px" }}>
                        <div className="about" style={{ height: "auto", paddingTop: "10px" }}>
                            <p><b>Pressure</b><br />{showWeatherDetails.main.pressure} hpa</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "50%", flex: "1" }}>
                        <div className="about" style={{ height: "auto", paddingTop: "10px" }}>
                            <p><b>Humidity</b><br />{showWeatherDetails.main.humidity} hpa</p>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <div className="card" style={{ width: "50%", flex: "1", marginRight: "20px" }}>
                        <div className="about" style={{ height: "auto", paddingTop: "10px" }}>
                            <p><b>Sunrise</b><br />{sunriseTime}</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: " 50%", flex: "1", height: "auto" }}>
                        <div className="about" style={{ height: "auto", paddingTop: "10px" }}>
                            <p><b>Sunrise</b><br />{sunsetTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherHomeLayout;