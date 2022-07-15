import React from "react";
import Columns from "../Components/Colums/front_Page_Colums";
import Background from "../Components/background/background";

const Home = () => {
    return (
        <>
            <div>
                <Background/>
                <h1 className="name">Thomas Lee<br></br>Williams</h1>
            </div>
            <div>
                <div class="container">
                    <div>
                        <h2 className="title">Welcome to my personal website</h2>
                    </div>
                    <div>
                        <Columns />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Home