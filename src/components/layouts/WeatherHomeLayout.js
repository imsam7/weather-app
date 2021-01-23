import sun from '../../assets/img/sun.png'
import cloudy from '../../assets/img/cloudy.png'
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function WeatherHomeLayout({ forecastDetails }) {
    var dailyForecast = []
    var tempForecast = []
    var currentTimestamp = []
    var today = new Date();
    var timestampsMaster = ["3 am", "6 am", "9 am", "12 pm", "3 pm", "6 pm", "9 pm", "12 am"]
    var upcomingDays = getUpcomingDays()
    let sunriseTime = epochtoDate(forecastDetails.city.sunrise)
    let sunsetTime = epochtoDate(forecastDetails.city.sunset)
    var hour = Math.ceil((24 - today.getHours()) / 3)

    if (hour === 0)
        hour++

    for (var i = 0; i < hour; i++) {
        tempForecast.push(forecastDetails.list[i])
        currentTimestamp.push(timestampsMaster[timestampsMaster.length - i - 1])
    }
    currentTimestamp.reverse()
    dailyForecast.push(tempForecast)
    tempForecast = []

    var j = 0;
    for (var i = hour; i < forecastDetails.list.length; i++) {
        j++
        tempForecast.push(forecastDetails.list[i])
        if (j % 8 === 0) {
            dailyForecast.push(tempForecast)
            tempForecast = []
        }
    }

    const [fiveDayWeatherForecast, setFiveDayWeatherForecast] = useState(dailyForecast[0]);
    const [timestamps, setTimestamps] = useState(currentTimestamp);
    const [carouselIndex, setCarouselIndex] = useState(0);

    function getWeatherDataDayWise(index) {
        setFiveDayWeatherForecast(dailyForecast[index])
        setCarouselIndex(index)
        if (index !== 0)
            setTimestamps(timestampsMaster)
        else
            setTimestamps(currentTimestamp)
    }

    function getWeatherDataDayWiseMain(index) {
        var temp1 = dailyForecast[index]
        var min = temp1[0].weather[0].main
        return min
    }

    function getMinTemp(index) {
        var temp1 = dailyForecast[index]
        var min = temp1[0].main.temp
        for (var i = 0; i < temp1.length; i++) {
            if (temp1[i].main.temp < min)
                min = temp1[i].main.temp
        }
        return min
    }

    function getMaxTemp(index) {
        var temp2 = dailyForecast[index]
        var max = temp2[0].main.temp
        for (var i = 0; i < temp2.length; i++) {
            if (temp2[i].main.temp > max)
                max = temp2[i].main.temp
        }
        return max
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
        if (forecast === 'Rain')
            return 'Rainy'
        else if (forecast === 'Clear')
            return 'Sunny'
        else if (forecast === 'Clouds')
            return 'Cloudy'
    }

    function getUpcomingDays() {
        var result = [];
        for (var i = 0; i < 5; i++) {
            var d = new Date();
            d.setDate(d.getDate() + i)
            result.push(d.toString().split(' ')[0])
        }
        return (result);
    }

    return (
        <div className="">
            <div className="demo">
                <div className="carousel">
                    {dailyForecast.map((weatherDetails, index) => (
                        <div className={"tablinks c-item " + (carouselIndex === index ? 'active' : '')} onClick={() => getWeatherDataDayWise(index)}>
                            <div>
                                <b>{upcomingDays[index]}</b><br />
                                <b>{kelvinToCelcius(getMaxTemp(index))}° <span style={{ color: "rgb(167, 165, 165)" }}>{kelvinToCelcius(getMinTemp(index))}° </span></b><br />
                                {getWeatherDataDayWiseMain(index) === 'Clear' && <img src={sun} width="24px" height="25px" />}
                                {getWeatherDataDayWiseMain(index) === 'Clouds' && <img src={cloudy} width="24px" height="25px" />}
                                <br />
                                <b style={{ color: "rgb(167, 165, 165)" }}>{getForecast(getWeatherDataDayWiseMain(index))}</b><br />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id="Mon1" className="tabcontent">
                <div className="bodyOfdiv">
                    <center>
                        <div className="card">
                            <div className="about">
                                {/* <h3><b>{forecastDetails.city.name}</b></h3> */}
                                <div style={{ display: "flex", flexWrap: "wrap" }}>

                                    <h1 style={{ fontSize: "50px", marginTop: "0px", marginBottom: "0px", marginRight: "15px" }} >
                                        <b>{kelvinToCelcius(fiveDayWeatherForecast[0].main.temp)}°C</b></h1>

                                    {fiveDayWeatherForecast[0].weather[0].main === 'Clear' && <img src={sun} style={{ height: "50px", width: "50px" }} />}
                                    {fiveDayWeatherForecast[0].weather[0].main === 'Clouds' && <img src={cloudy} style={{ height: "50px", width: "50px" }} />}

                                </div>
                            </div>

                            <div className="axis graph">

                                <Line options={{
                                    tooltips: { enabled: false, }, legend: { display: false }, scales:
                                    {
                                        yAxes: [{
                                            display: false,
                                            gridLines: {
                                                drawBorder: false,
                                                display: false
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: 50
                                            }
                                        }],
                                        xAxes: [{ gridLines: { display: false, }, }],
                                    }
                                }}
                                    data={{
                                        labels: fiveDayWeatherForecast.map((weatherDetails, index) => [kelvinToCelcius(weatherDetails.main.temp) + "°C", timestamps[index]]),
                                        datasets: [{
                                            data: fiveDayWeatherForecast.map((weatherDetails) => kelvinToCelcius(weatherDetails.main.temp)),
                                            label: 'Temp',
                                            borderColor: '#3498DB',
                                            fill: false
                                        }]
                                    }}
                                />
                            </div>
                        </div>
                    </center>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <div className="" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "10px", marginRight: "8px" }}>
                            <p><b>Pressure</b><br />{fiveDayWeatherForecast[0].main.pressure} hpa</p>
                        </div>
                    </div>
                    <div className="" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "10px", marginRight: "8px" }}>
                            <p><b>Humidity</b><br />{fiveDayWeatherForecast[0].main.humidity} %</p>
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
                            <p><b>Sunset</b><br />{sunsetTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherHomeLayout;