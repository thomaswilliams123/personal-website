import React from "react";
import Columns from "../../Components/Colums/front_Page_Colums";
import "./home.css"
import Header from "../../Components/Header/header"

const Home = () => {
    return (
        <>
            <head>
                <title>Home</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Home page for Thomas Lee Williams
                personal website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, React"/>
                <meta name="author" content="Thomas Lee Williams"/>
            </head>
            <div className="main_home">
            <Header/>
                <div className="page_home">
                    <div className="night_home">
                    </div>
                    <h1 className="name_home">Thomas Lee<br></br>Williams</h1>
                    <h2 className="title_home">Welcome to my personal website</h2>
                    <Columns />
                </div>
            </div>
        </>
    )
}

export default Home