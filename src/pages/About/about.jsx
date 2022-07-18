import React from "react";
import './about.css'
import Header from '../../Components/Header/header';
import '../../Assets/profile.jpg'

const About = () => {
    return (
        <>
            <div className="main_about">
                <Header/>
                <div className="page_about">
                    <h1 className="name_about">About</h1>
                    <div className="profile">
                        <p className="profile-para">Hello, my name is Thomas Lee Williams. I am
                        a Computer Systems and Network (BEng) student at Napier University, and I will 
                        be graduating in June/July of 2023. 
                        <br></br><br></br>
                        I have been taught and worked on various different technologies and softwares within the 
                        networking ecosystem. These include: Cisco routers and switches, Network Simulation Software (Omnet++), 
                        Scripting with python, windows servers, and many different linux features 
                        (SELinux, firewalls, DNS, and web servers).
                        <br></br><br></br>
                        In my free time outside of university, I have been working with docker and kubernetes in an attempt to
                        self-host services like websites, game servers running on Pterodactyl for friends, file servers, and 
                        any other tools that make my work and time more valueable.
                        </p>
                        <img src='https://i.imgur.com/SaD2dHu.jpg' alt="Profile" 
                        height={300} className="profile-image"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About