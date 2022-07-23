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
                        <ul className="resume_body_of_text_list">
                            <li className="list_items_resume">
                                <i className="list_marker"><b>Edinburgh Napier University (Merchiston Campus)</b></i>
                                <ul className="resume_body_of_text_list">
                                    <li className="list_items_resume">
                                    <i>Computer Systems And Networking (BEng)</i>
                                <i className="dates">(2021 - Current)</i>
                                    </li>
                                </ul>
                            </li>
                            <li className="list_items_resume">
                                <i className="list_marker"><b>Edinburgh College (Sighthill Campus)</b></i>
                                <ul className="resume_body_of_text_list">
                                    <li className="list_items_resume">
                                        <i className="list_marker">Computing HNC (Higher National Certificate)</i>
                                        <i className="dates">(2019 - 2020)</i>
                                    </li>
                                    <li className="list_items_resume">
                                        <i className="list_marker">Computer Networking HND (Higher National Certificate)</i>
                                        <i className="dates">(2020 - 2021)</i>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h2 className="resume_title">
                            Skills
                        </h2>
                        <ul className="resume_body_of_text_list">
                            <li className="list_items_resume">
                                <i><b>Languages: </b>Javascript/Typescript, Python, 
                                HTML, CSS, Bash
                                </i>
                            </li>
                            <li className="list_items_resume">
                                <i><b>Technologies: </b>Linux, Node.js, Docker, Cisco, Git, Microsoft Server 2019,
                                SELinux, <br></br>OMNET++
                                </i>
                            </li>
                        </ul>
                        <h2 className="resume_title">
                            Experenice
                        </h2>
                        <ul className="resume_body_of_text_list">
                            <li className="list_items_resume">
                                <i className="list_marker"><b>McDonalds - Crew Member</b></i>
                                <i className="dates">(2017 - 2018)</i>
                                <ul className="resume_body_of_text_list">
                                    <li className="list_items_resume">
                                        <i>Health and Safety awareness, Situation Awareness, Conflict Resolution, 
                                        Customer Service experience, Confidence Building, Patience, Cash Handling,
                                        Teamwork, Team Building, Register Training, Individual Work, Hygiene Awareness</i>
                                    </li>
                                </ul>
                            </li>
                            <li className="list_items_resume">
                                <i className="list_marker"><b>4 Seasons Health Care - Catering Assistant</b></i>
                                <i className="dates">(2017 - 2017)</i>
                                <ul className="resume_body_of_text_list">
                                    <li className="list_items_resume">
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