import {React} from "react"
import Header from '../../Components/Header/header'
import './projects.css'
import Weather from "../../Components/Weather App/weather"

const Projects = () => {
    return (
        <>
             <head>
                <title>Projects</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Projects page for Thomas Lee Williams
                personal website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, React"/>
                <meta name="author" content="Thomas Lee Williams"/>
            </head>
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
                            forecast in a easy to see format. The Weather app will display
                            information for the current location, current tempreture, a 
                            description of the weather conditions, the humidity, and the 
                            current wind speed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects