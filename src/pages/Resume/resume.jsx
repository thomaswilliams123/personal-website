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
                    <div className="div_button_resume">
                    <a href="https://drive.google.com/uc?export=download&id=1dBaqkeefGRI9jlw9qKP-vqHu_yqmBUFs"
                    download>
                        <button className="download_resume"
                        href="/src/assets" download="Thomas Lee Williams Resume.docx">
                            Download Resume
                        </button>
                        </a>
                    </div>
                    <div className="resume-main-body">
                        <h2 className="resume_title">
                                Education
                        </h2>
                        <ul>
                            <li className="resume_list_item">
                                <b>Edinburgh Napier University (Merchiston Campus)</b>
                            </li>
                            <ul>
                                <li className="resume_sub_item">
                                    <span>
                                    <i>Computer Systems And Networking (BEng)</i>
                                    </span>
                                    <span>
                                    <i className="dates">(2021 - Current)</i>
                                    </span>
                                </li>
                            </ul>
                            <li className="resume_list_item">
                                <b>Edinburgh College (Sighthill Campus)</b>
                            </li>
                            <ul>
                                <li className="resume_sub_item">
                                    <span>
                                        <i>Computing HNC (Higher National Certificate)</i>
                                    </span>
                                    <span>
                                        <i className="dates">(2019 - 2020)</i>
                                    </span> 
                                </li>
                                <li className="resume_sub_item">
                                    <span>
                                        <i>Computer Networking HND (Higher National Certificate)</i>
                                    </span>
                                    <span>
                                        <i className="dates">(2020 - 2021)</i>
                                    </span>
                                </li>
                            </ul>
                        </ul>
                        <h2 className="resume_title">
                            Skills
                        </h2>
                        <ul>
                            <li className="resume_list_item">
                                <b>Languages: </b> <i>Javascript/Typescript, Python, 
                                HTML, CSS, Bash
                                </i>
                            </li>
                            <li className="resume_list_item">
                                <b>Technologies: </b><i>Linux, Node.js, Docker, Cisco, Git, Microsoft Server 2019,
                                SELinux, <br></br>OMNET++
                                </i>
                            </li>
                        </ul>
                        <h2 className="resume_title">
                            Experenice
                        </h2>
                        <ul>
                            <li className="resume_list_item">
                                <span>
                                    <b>McDonalds - Crew Member</b>
                                </span>
                                <span>
                                    <i className="dates">(2017 - 2018)</i>
                                </span>
                                <ul>
                                    <li className="resume_sub_item">
                                        <i>Health and Safety awareness, Situation Awareness, Conflict Resolution, 
                                        Customer Service experience, Confidence Building, Patience, Cash Handling,
                                        Teamwork, Team Building, Register Training, Individual Work, Hygiene Awareness</i>
                                    </li>
                                </ul>
                            </li>
                            <li className="resume_list_item">
                                <span>
                                    <b>4 Seasons Health Care - Catering Assistant</b>
                                </span>
                                <span>
                                    <i className="dates">(2017 - 2017)</i>
                                </span>
                                <ul>
                                    <li className="resume_sub_item">
                                        <i>Working with the elderly, Food Preparation, Porter Duties, General Tiding Duties,
                                        Health and Safety, Time Keeping and Management</i>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume