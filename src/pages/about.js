import React from "react";
import './about.css'
import Header from '../Components/Header/header'

const About = () => {
    return (
        <>
            <div className="main_about">
                <Header/>
                <div className="page_about">
                    <h1 className="name_about">Thomas Lee<br></br>Williams</h1>
                    <h1 className="page_describer_about">About</h1>
                </div>
            </div>
        </>
    )
}

export default About