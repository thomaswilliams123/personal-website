import {React} from "react"
import Header from '../../Components/Header/header'
import './projects.css'
import Weather from "../../Components/Weather App/weather"

const Projects = () => {
    return (
        <>
            <div className="main_projects">
            <Header/>
                <div className="page_projects">
                    <h1 className="name_projects">Projects</h1>
                    <div className="weather-app">
                        <Weather/>
                        <div className="weather-app-desc">
                            <h2 className="weather-app-title">Weather Forcast App</h2>
                            <p className="weather-app-text">This component is a weather
                            app built to not only get the current tempreture of a given
                            location, but also the next 4 days forecast weather for the 
                            given location.
                            <br></br>
                            <br></br>
                            The component does this by calling the OpenWeather current
                            weather API to get the current weather for the city, county,
                            state (US only), town, and country entered into the search bar.
                            The exact same happens with the 5 day / 3 hour forecast API.
                            <br></br>
                            <br></br>
                            It then displays the current forecast with the next 4 days 
                            forecast in a easy to see format. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects