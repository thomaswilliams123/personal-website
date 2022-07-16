import React from "react";
import Columns from "../Components/Colums/front_Page_Colums";
import Background from "../Components/background/background";
import "./home.css"

const Home = () => {
    return (
        <>
        <div className="night_home">
            <Background/>
        </div>
            <div className="main_home">
                <div className="page_home">
                    <h1 className="name_home">Thomas Lee<br></br>Williams</h1>
                    <h2 className="title_home">Welcome to my personal website</h2>
                    <Columns />
                </div>
            </div>
        </>
    )
}

export default Home