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
                    <div>
                        <Weather/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects