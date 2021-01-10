import sun from '../../assets/img/sun.png'
import cloudy from '../../assets/img/cloudy.png'
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function WeatherHomeLayout({ weatherData }) {
    let sunriseTime = epochtoDate(weatherData.weather.city.sunrise)
    let sunsetTime = epochtoDate(weatherData.weather.city.sunset)
    var weatherDataDayWise = []
    var tempDailyWeatherDayWise = []
    for (var i = 0; i < weatherData.weather.list.length; i++) {
        if (i < 8)
            tempDailyWeatherDayWise.push(weatherData.weather.list[i])
        if (i % 8 == 0) {
            weatherDataDayWise.push(weatherData.weather.list[i])
        }
    }
    const [showWeatherDetails, setShowWeatherDetails] = useState(weatherDataDayWise[0]);
    const [dailyWeatherDayWise, setDailyWeatherDayWise] = useState(tempDailyWeatherDayWise);
    const [carouselIndex, setCarouselIndex] = useState(0);
    var last5Days = Last5Days()

    function getWeatherDataDayWise(index) {
        setShowWeatherDetails(weatherDataDayWise[index])
        var tempDailyWeatherDayWise = []
        for (var i = index * 8; i < index * 8 + 8; i++) {
            // if (i < 8)
            tempDailyWeatherDayWise.push(weatherData.weather.list[i])
        }
        setDailyWeatherDayWise(tempDailyWeatherDayWise)
        setCarouselIndex(index)
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

    function Last5Days() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            var d = new Date();
            result.push(d.toString().split(' ')[0])
        }
        return (result);
    }

    return (
        <div className="">
            <div className="demo">
                <div className="carousel">
                    {weatherDataDayWise.map((weatherDetails, index) => (
                        <div className={"tablinks c-item"} onClick={() => getWeatherDataDayWise(index)}>
                            <div>
                                <b>{last5Days[index]}</b><br />
                                <b>{kelvinToCelcius(weatherDetails.main.temp_max)}° <span style={{ color: "rgb(167, 165, 165)" }}>{kelvinToCelcius(weatherDetails.main.temp_min)}° </span></b><br />
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

                        <div className="axis graph">

                            <Line
                                options={
                                    {
                                        tooltips: {
                                            enabled: false,
                                        },
                                        legend: {
                                            display: false
                                        }, scales:
                                        {
                                            yAxes: [{
                                                display: false,
                                                gridLines: {
                                                    drawBorder: false,
                                                    display: false
                                                }
                                            }],
                                            xAxes: [{
                                                gridLines: {
                                                    display: false,
                                                },
                                            }],
                                        }
                                    }
                                }
                                data={{
                                    labels: dailyWeatherDayWise.map((weatherDetails) => kelvinToCelcius(weatherDetails.main.temp) + "°C"),
                                    datasets: [{
                                        data: dailyWeatherDayWise.map((weatherDetails) => kelvinToCelcius(weatherDetails.main.temp)),
                                        label: 'Infected',
                                        borderColor: '#3333ff',
                                        fill: true
                                    }]
                                }}
                            />

                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <div className="" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "10px", marginRight: "8px" }}>
                            <p><b>Pressure</b><br />{showWeatherDetails.main.pressure} hpa</p>
                        </div>
                    </div>
                    <div className="" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "10px", marginRight: "8px" }}>
                            <p><b>Humidity</b><br />{showWeatherDetails.main.humidity} hpa</p>
                        </div>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex", marginTop: "-20px" }}>
                    <div className="boxes" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "0px", marginRight: "40px", marginBottom: "5px", backgroundColor: "white" }}>
                            <p><b>Sunrise</b><br />{sunriseTime}</p>
                        </div>
                    </div>
                    <div className="" style={{ width: " 50%", flex: "1", height: "auto" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "0px", marginLeft: "40px", marginBottom: "5px", backgroundColor: "white" }}>
                            <p><b>Sunrise</b><br />{sunsetTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherHomeLayout;