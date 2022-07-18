import {React} from "react"
import Header from '../../Components/Header/header'
import './resume.css'

const Resume = () => {
    return (
        <>
            <div className="main_resume">
                <Header/>
                <div className="page_resume">
                    <h1 className="name_resume">Resume</h1>
                </div>
            </div>
        </>
    )
}

export default Resume