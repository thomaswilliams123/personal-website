import React from "react";
import './blogs.css'
import Header from '../../Components/Header/header';
import '../../Assets/profile.jpg'
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <>
             <head>
                <title>Blogs</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Blogs page for Thomas Lee Williams
                personal website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, React"/>
                <meta name="author" content="Thomas Lee Williams"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            </head>
            <div className="main_blog">
                <Header/>
                <div className="page_blog">
                    <h1 className="name_blog">Blogs</h1>
                    <p className="desc_blog">
                        Here is where I am going to be keeping a account of random opinions, 
                        thoughts, events, and special occations varying from programming, to networking,
                         to anything else I seem to get up to in life. I don't lead a very glamorous
                        life, but it's mine and I want to share that life with people, in my own way.
                    </p>
                    <div className="blog_container">
                        <Link to="/blogs/day-out-seeing-spiderman-2021">
                            <img src={require('../../Assets/food-1.jpg')} className="blog_image"
                            alt="thumbnail-for-post"/>
                        </Link>
                        <div className="blog_title_and_desc">
                            <Link to="/blogs/day-out-seeing-spiderman-2021">
                                <div className="blog_title">
                                    <h2><b>Day out seeing Spiderman - 2021</b></h2>
                                </div>
                            </Link>
                            <div className="blog_desc_sub">
                                This day, me and my friends (Lizzy and Bob) went for a day out in edinburgh
                                during winter season for a nice day out at both Coros (Chocolate Cafe) and 
                                a viewing of the new Spiderman: No Way Home. 
                            </div>
                        </div>
                    </div>
                    <div className="blog_container_after_first">
                        <Link to="/blogs/my-amazing-trip-to-london-2019">    
                            <img src={require('../../Assets/london-1.jpg')} className="blog_image"
                            alt="thumbnail-for-post"/>
                        </Link>
                        <div className="blog_title_and_desc">
                            <Link to="/blogs/my-amazing-trip-to-london-2019" className="">    
                                <div className="blog_title">
                                    <h2><b>My amazing trip to London - 2019</b></h2>
                                </div>
                            </Link>
                            <div className="blog_desc_sub">
                            Before the world turned upside down and inside out, before it was all locked down
                            and we were all hiding away from the scary virus, I got away from Scotland
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    )
}

export default Blogs