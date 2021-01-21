import sun from '../../assets/img/sun.png'
import cloudy from '../../assets/img/cloudy.png'
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function WeatherHomeLayout({ weatherData }) {
    var DayWiselist = []
    var temp = []
    var timeArray = ["12 am", " 3 am", "6 am", "9 am", "12 pm", " 3 pm", "6 pm", "9 pm"]
    var tempTimeArray = []
    var last5Days = Last5Days()
    let sunriseTime = epochtoDate(weatherData.weather.city.sunrise)
    let sunsetTime = epochtoDate(weatherData.weather.city.sunset)
    var today = new Date();
    var hour = Math.round((24 - today.getHours()) / 3)

    if (hour == 0)
        hour++

    for (var i = 0; i < hour; i++) {
        temp.push(weatherData.weather.list[i])
        tempTimeArray.push(timeArray[timeArray.length - i - 1])
    }
    DayWiselist.push(temp)
    temp = []
    var j = 0;
    for (var i = hour; i < weatherData.weather.list.length; i++) {
        j++
        temp.push(weatherData.weather.list[i])
        if (j % 8 === 0) {
            DayWiselist.push(temp)
            temp = []
        }
    }

    const [currentWeatherDetails, setcurrentWeatherDetails] = useState(DayWiselist[0][0]);
    const [timeStamps, setTimeStamps] = useState(tempTimeArray);
    const [dailyWeatherDayWise, setDailyWeatherDayWise] = useState(DayWiselist[0]);
    const [carouselIndex, setCarouselIndex] = useState(0);

    function getWeatherDataDayWise(index) {
        setcurrentWeatherDetails(DayWiselist[index][0])
        setDailyWeatherDayWise(DayWiselist[index])
        setCarouselIndex(index)
        if (index != 0)
            setTimeStamps(timeArray)
    }

    function getWeatherDataDayWiseMain(index) {
        var temp1 = DayWiselist[index]
        var min = temp1[0].weather[0].main
        return min
    }

    function getMinTemp(index) {
        var temp1 = DayWiselist[index]
        var min = temp1[0].main.temp
        for (var i = 0; i < temp1.length; i++) {
            if (temp1[i].main.temp < min)
                min = temp1[i].main.temp
        }
        return min
    }

    function getMaxTemp(index) {
        var temp2 = DayWiselist[index]
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
            d.setDate(d.getDate() + i)
            result.push(d.toString().split(' ')[0])
        }
        return (result);
    }

    return (
        <div className="">
            <div className="demo">
                <div className="carousel">
                    {DayWiselist.map((weatherDetails, index) => (
                        <div className={"tablinks c-item " + (carouselIndex === index ? 'active' : '')} onClick={() => getWeatherDataDayWise(index)}>
                            <div>
                                <b>{last5Days[index]}</b><br />
                                <b>{kelvinToCelcius(getMaxTemp(index))}° <span style={{ color: "rgb(167, 165, 165)" }}>{kelvinToCelcius(getMinTemp(index))}° </span></b><br />
                                {getWeatherDataDayWiseMain(index) == 'Clear' && <img src={sun} width="24px" height="25px" />}
                                {getWeatherDataDayWiseMain(index) == 'Clouds' && <img src={cloudy} width="24px" height="25px" />}
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
                                {/* <h3><b>{weatherData.weather.city.name}</b></h3> */}
                                <div style={{ display: "flex", flexWrap: "wrap" }}>

                                    <h1 style={{ fontSize: "50px", marginTop: "0px", marginBottom: "0px", marginRight: "15px" }} >
                                        <b>{kelvinToCelcius(currentWeatherDetails.main.temp)}°C</b></h1>

                                    {currentWeatherDetails.weather[0].main == 'Clear' && <img src={sun} style={{ height: "50px", width: "50px" }} />}
                                    {currentWeatherDetails.weather[0].main == 'Clouds' && <img src={cloudy} style={{ height: "50px", width: "50px" }} />}

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
                                        labels: dailyWeatherDayWise.map((weatherDetails, index) => [kelvinToCelcius(weatherDetails.main.temp) + "°C", timeStamps[index]]),
                                        datasets: [{
                                            data: dailyWeatherDayWise.map((weatherDetails) => kelvinToCelcius(weatherDetails.main.temp)),
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
                            <p><b>Pressure</b><br />{currentWeatherDetails.main.pressure} hpa</p>
                        </div>
                    </div>
                    <div className="" style={{ width: "50%", flex: "1" }}>
                        <div className="innerbox" style={{ height: "auto", paddingTop: "10px", marginRight: "8px" }}>
                            <p><b>Humidity</b><br />{currentWeatherDetails.main.humidity} %</p>
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