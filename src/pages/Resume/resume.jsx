import {React, useState} from "react"
import Header from '../../Components/Header/header'
import './resume.css'

const Resume = () => {
    
    const apiKey = '76ba75a58e302f623530a065278c3e7f'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json()).then(data => {setWeatherData(data)})
        }
    }

    return (
        <>
            <div className="main_home">
            <Header/>
                <div className="page_about">
                    <h1 className="name_home">Thomas Lee<br></br>Williams</h1>
                    <div className="container-about-weather">
                        <input className="input-about-weather" 
                        placeholder="Search"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        onKeyPress={getWeather}>
                        </input>
                        <div>
                            {typeof weatherData.main === 'undefined' ? (
                                <div className="weather-content-rows-beginning">
                                    <p>Welcome to my weather app. Enter a city name
                                        to get the weather for that city
                                    </p>
                                </div>
                            ) : (
                                <div className="weather-content">
                                    <div className="weather-content-rows">
                                        <p>{weatherData.name}, {weatherData.sys.country}</p>
                                    </div>
                                    <div className="weather-content-rows-temp">
                                        <p>{Math.round(weatherData.main.temp)}°C</p>
                                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                                        alt=""/>
                                    </div>
                                    <div className="weather-content-rows">
                                        <p>{weatherData.weather[0].description}</p>
                                    </div>
                                    <div className="weather-content-humidity">
                                        <p>Humidity: {weatherData.main.humidity}</p>
                                    </div>
                                    <div className="weather-content-wind">
                                        <p>Wind Speed: {(weatherData.wind.speed * 2.23694).toFixed(1)} mph</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume