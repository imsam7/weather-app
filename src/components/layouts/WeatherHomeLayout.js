function WeatherHomeLayout({ weatherData }) {
    console.log(weatherData.weather)
    return (
        <div className="">

            <div>
                <h1>{weatherData.weather.city.name}</h1>
            </div>
            humidity
            <h3>{weatherData.weather.list[0].main.humidity} %</h3>
            
            pressure
            <h3>{weatherData.weather.list[0].main.pressure} hpa</h3>
            
            sunrise
            <h3>{weatherData.weather.city.sunrise}</h3>
            
            sunset
            <h3>{weatherData.weather.city.sunset}</h3>
            
            {/* <div className="">
                {followersData.map((follower) => (
                    <div className="card">
                        <img src={follower.avatar_url} alt="Avatar" style={{ width: '20%' }} />
                        <div className="container">
                            <h4><b>{follower.login}</b></h4>
                            <a href={follower.html_url}>Visit Profile on Github</a>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default WeatherHomeLayout;