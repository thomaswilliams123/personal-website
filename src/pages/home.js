import React from "react";
import Columns from "../Components/Colums/front_Page_Colums";
import Background from "../Components/background/background";
import "./home.css"

const Home = () => {
    return (
        <>
            <div>        
                <div className="night">
                    <Background/>
                </div>
                <div>
                    <main>
                        <div>
                            <h1 className="name">Thomas Lee<br></br>Williams</h1>
                            <h2 className="title">Welcome to my personal website</h2>
                            <Columns />
                        </div>
                    </main>
                </div>
            </div>
        </>
        
    )
}

export default Home