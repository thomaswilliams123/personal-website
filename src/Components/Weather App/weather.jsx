import {React, useState} from "react"
import './weather.css'


const Weather = () => {
    
    const apiKey = '76ba75a58e302f623530a065278c3e7f'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")
    const [forcastWeather, setForcastWeather] = useState([{}])
    
    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json()).then(data => {setWeatherData(data)})
        }
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json()).then(data => {setForcastWeather(data)})
        }
    }
    
    const hasWeatherData = !!(weatherData.main && forcastWeather.list?.length > 0);


    return (
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/> 
        </head>   
            {!hasWeatherData && (
                <>
                    <div className="container-about-weather">
                        <input className="input-about-weather" 
                            placeholder="Search"
                            onChange={e => setCity(e.target.value)}
                            value={city}
                            onKeyPress={getWeather}>
                        </input>
                        <div className="weather-content-rows-beginning">
                            <p>Welcome to my weather app. Enter a city name
                            to get the weather for that city
                            </p>
                        </div>
                    </div>
                </>
            )}
            
            {hasWeatherData && (
                <>    
                    <div className="container-about-weather">
                        <input className="input-about-weather" 
                            placeholder="Search"
                            onChange={e => setCity(e.target.value)}
                            value={city}
                            onKeyPress={getWeather}>
                        </input>
                        <div className="weather-all">    
                        <div className="weather-now">
                            <div className="weather-content-rows-name">
                                <p>{weatherData.name}, {weatherData.sys.country}</p>
                            </div>
                            <div className="weather-content-rows-temp">
                                <p>{Math.round(weatherData.main.temp)}°C</p>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                                alt=""/>
                            </div>
                            <div className="weather-content-rows-description">
                                <p>{weatherData.weather[0].description}</p>
                            </div>
                            <div className="weather-content-humidity">
                                <p>Humidity: {weatherData.main.humidity}</p>
                            </div>
                            <div className="weather-content-wind">
                                <p>Wind: {(weatherData.wind.speed * 2.23694).toFixed(1)} mph</p>
                            </div>
                        </div>
                        <div className="weather-forcast">
                            <div className="weather-forcast-days">
                                <img src={`https://openweathermap.org/img/wn/${forcastWeather.list[8].weather[0].icon}@2x.png`} alt="icon"></img>
                                <p className="weather-forcast-days-text">{Math.round(forcastWeather.list[8].main.temp)}°C</p>
                                <p className="weather-forcast-days-text-no">24h</p>
                            </div>
                            <div className="weather-forcast-days">
                                <img src={`https://openweathermap.org/img/wn/${forcastWeather.list[16].weather[0].icon}@2x.png`} alt="icon"></img>
                                <p className="weather-forcast-days-text">{Math.round(forcastWeather.list[16].main.temp)}°C</p>
                                <p className="weather-forcast-days-text-no">48h</p>
                            </div>
                        </div>
                        <div className="weather-forcast-bottom">
                            <div className="weather-forcast-days">
                                <img src={`https://openweathermap.org/img/wn/${forcastWeather.list[24].weather[0].icon}@2x.png`} alt="icon"></img>
                                <p className="weather-forcast-days-text">{Math.round(forcastWeather.list[24].main.temp)}°C</p>
                                <p className="weather-forcast-days-text-no">72h</p>
                            </div>
                            <div className="weather-forcast-days">
                                <img src={`https://openweathermap.org/img/wn/${forcastWeather.list[32].weather[0].icon}@2x.png`} alt="icon"></img>
                                <p className="weather-forcast-days-text">{Math.round(forcastWeather.list[32].main.temp)}°C</p>
                                <p className="weather-forcast-days-text-no">96h</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </>

            )}
        </> 
    )
    }


export default Weather