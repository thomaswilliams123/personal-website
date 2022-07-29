import React from "react";
import './index.css'
import Header from '../../../../Components/Header/header';

const AmazingTripToLondon = () => {
    return (
        <>
            <head>
                <title>My amazing trip to London - 2019</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Blogs page for Thomas Lee Williams
                personal website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, React"/>
                <meta name="author" content="Thomas Lee Williams"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            </head>
            <div className="main_trip_london">
                <Header/>
                <div className="page_trip_london">
                    <h1 className="name_trip_london">My amazing trip to London</h1>
                    <h2 className="date_trip_london"><u>18th October 2019</u></h2>
                    <div className="desc_trip_london">
                        <p className="">
                        So today is one of the only days out in Edinburgh I have had 
                        since this pandemic started and it was one to remember.
                        </p>
                    </div>
                    <div className="para_trip_london">
                        <p>
                        I'll put this description for me and maybe delete it later hehe. 
                        So in 2019, I went down to London for 1 day. Really it was more than 
                        12 hours as I was asleep for 8 of them and travelling for 3, but when 
                        I got to the city I saw….a few sights.
                        </p>
                        <br></br>
                        <div className="grid_for_images">
                            <img src={require('../../../../Assets/london-1.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-2.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-3.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-4.jpg')} className="images_in_grid" alt="london"/>
                        </div>
                        <img src={require('../../../../Assets/london-5.jpg')} className="images_in_grid" alt="london"/>
                        <br></br>
                        <br></br>
                        <p>
                        I was there to go and visit EGX Rezzed for the day. A big *gaming* convention where 
                        they show off some of the indie games that don't get the marketing of Sony or Microsoft.
                        Played some pretty cool titles, can't really remember what they were now which upon 
                        reflection is rather sad.
                        </p>
                        <br></br>
                        <p>
                        Anyway, I went there to see in person Outside Xtra, a small YouTuber group that makes some 
                        pretty funny gaming videos every week and talk about gaming news and do quizzes. I was 
                        there to see them do a D&D session in person and while that may sound uninteresting, to me 
                        it was my whole world. I still have the pass for the show, the badge I got for attending, 
                        and the EGX Rezzed wristband
                        </p>
                        <br></br>
                        <img src={require('../../../../Assets/egx.jpg')} className="images_in_grid" alt="london"/>
                        <br></br>
                        <br></br>
                        <iframe width="100%" height="535px" src="https://www.youtube-nocookie.com/embed/NdQMxS6qZOQ" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br></br>
                        <br></br>
                        <p>
                        Once that was over, had the most confusing conversation with this dude and his girlfriend 
                        and I think/hope I saved their relationship. After that, I went down to tower bridge and the 
                        Tower of London for a small walk because I could and had the time.
                        </p>
                        <br></br>
                        <div className="grid_for_images">
                            <img src={require('../../../../Assets/london-7.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-8.jpg')} className="images_in_grid" alt="london"/>
                        </div>
                        <img src={require('../../../../Assets/london-9.jpg')} className="images_in_grid" alt="london"/>
                        <br></br>
                        <br></br>
                        <p>
                        Once that was done, I went back to my hotel room and had a brilliant small 2 hours sleep. 
                        Then woke up the next day, had breakfast, snapped a few photo's of London City Airport 
                        and left for home. 100% worth the trip
                        </p>
                        <br></br>
                        <div className="grid_for_images_2">
                            <img src={require('../../../../Assets/london-10.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-11.jpg')} className="images_in_grid" alt="london"/>
                            <img src={require('../../../../Assets/london-12.jpg')} className="images_in_grid" alt="london"/>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AmazingTripToLondon