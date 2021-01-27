import sun from '../../assets/img/sun.png'
import cloudy from '../../assets/img/cloudy.png'
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function WeatherHomeLayout({ forecastDetails }) {
    var dailyForecast = []
    var tempForecast = []
    var currentTimestamp = []
    var today = new Date();
    var timestampsMaster = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"]
    var upcomingDays = getUpcomingDays()
    let sunriseTime = epochtoDate(forecastDetails.city.sunrise)
    let sunsetTime = epochtoDate(forecastDetails.city.sunset)

    var k = 0;
    var j = 0;
    var timeStampIndex = 0;
    //Current day Forecast Details
    for (var i = 0; i < forecastDetails.list.length; i++) {
        if (forecastDetails.list[i].dt_txt.split(" ")[0].split("-")[2] == today.getDate()) {
            tempForecast.push(forecastDetails.list[i])
            currentTimestamp.push(timestampsMaster[timestampsMaster.length - timeStampIndex - 1])
            timeStampIndex++;
        }
        else if (forecastDetails.list[i].dt_txt.split(" ")[0].split("-")[2] > today.getDate()) {
            currentTimestamp.reverse()
            dailyForecast.push(tempForecast)
            tempForecast = []
            k = i;
            break;
        }
    }

    //Upcoming days Forecast Details
    for (var i = k; i < forecastDetails.list.length; i++) {
        j++
        tempForecast.push(forecastDetails.list[i])
        if (j % 8 === 0) {
            dailyForecast.push(tempForecast)
            tempForecast = []
        }
    }

    const [selectedWeatherForecast, setSelectedWeatherForecast] = useState(dailyForecast[0]);
    const [timestamps, setTimestamps] = useState(currentTimestamp);
    const [carouselIndex, setCarouselIndex] = useState(0);

    function getWeatherDataDayWise(index) {
        setSelectedWeatherForecast(dailyForecast[index])
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

        <center>
            {/* <br />
            <br />
            
            <br />
            <br /> */}
            <div>
                <div className="shadowBox">
                    <div className="">
                        <h2><b>{forecastDetails.city.name} {kelvinToCelcius(selectedWeatherForecast[0].main.temp)}° C</b> </h2>
                    </div>
                    <div className="central">
                        <div className="alignright ">
                            <div className="">
                                {selectedWeatherForecast[0].weather[0].main === 'Clear' && <img className="sun-icon" />}
                                {selectedWeatherForecast[0].weather[0].main === 'Clouds' && <img className="cloud-icon" />}
                            </div>
                        </div>
                        <div className="alignleft">
                            <div><span className="heading">Feels like:</span>&nbsp;<span className="text">{kelvinToCelcius(selectedWeatherForecast[0].main.feels_like)}°</span></div>
                            {/* <div><b>Pressure</b>&nbsp;{selectedWeatherForecast[0].main.pressure} hpa</div> */}
                            <div><span className="heading">Humidity:</span>&nbsp;<span className="text">{selectedWeatherForecast[0].main.humidity}%</span></div>
                            <div><span className="heading">Wind Speed:</span>&nbsp;<span className="text">{selectedWeatherForecast[0].wind.speed} m/s</span></div>
                            <div><span className="heading">Chance of rain:</span>&nbsp;<span className="text">{selectedWeatherForecast[0].pop}%</span></div>
                            <div><span className="heading">Cloudiness:</span>&nbsp;<span className="text">{selectedWeatherForecast[0].clouds.all}%</span></div>
                            {/* <div><b>Visibility</b>&nbsp;{selectedWeatherForecast[0].visibility} m</div> */}
                            {/* {carouselIndex == 0 && <div><b>Sunrise</b>&nbsp;{sunriseTime}&nbsp; </div>} */}
                            {/* {carouselIndex == 0 && <div><b>Sunset</b>&nbsp;{sunsetTime}</div>} */}
                        </div> <br />
                    </div>

                    {/* <div> */}
                    <div className="tablinks card-item" >
                        <div className="card" >
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
                                        labels: selectedWeatherForecast.map((weatherDetails, index) => [kelvinToCelcius(weatherDetails.main.temp) + "°", timestamps[index]]),
                                        datasets: [{
                                            data: selectedWeatherForecast.map((weatherDetails) => kelvinToCelcius(weatherDetails.main.temp)),
                                            label: 'Temp',
                                            borderColor: '#3498DB',
                                            fill: false
                                        }]
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
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
                {dailyForecast.map((weatherDetails, index) => (
                    <span className={"dot " + (carouselIndex === index ? 'active-dot' : '')}></span>
                ))}
            </div>
        </center >
    )
}

export default WeatherHomeLayout;