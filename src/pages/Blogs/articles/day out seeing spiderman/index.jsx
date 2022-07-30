import React from "react";
import './index.css'
import Header from '../../../../Components/Header/header';
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const DayOutSeeingSpiderman = () => {
    return (
        <>
            <head>
                <title>Day out seeing Spiderman - 2021</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="Blogs page for Thomas Lee Williams
                personal website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, React"/>
                <meta name="author" content="Thomas Lee Williams"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <div className="main_day_out">
                <Header/>
                <div className="page_day_out">
                    <div className="title_stuff">
                        <Link to="/blogs">
                            <HiArrowLeft className="back_arrow"/>
                        </Link>
                        <h1 className="name_trip_london">Day out seeing Spiderman</h1>
                    </div>
                    <h2 className="date_day_out"><u>18th December 2021</u></h2>
                    <div className="desc_day_out">
                        <p className="">
                        So today is one of the only days out in Edinburgh I have had 
                        since this pandemic started and it was one to remember.
                        </p>
                    </div>
                    <div className="para_day_out">
                        <p>
                        So, I'll try and recount the day from the beginning so I can 
                        look back one day and see how this day was. First, the real 
                        hurdle was before even getting into Edinburgh. I was ready, 
                        clothed, washed, and waiting by the bus stop for Lizzy to arrive. 
                        By now, it was 10:53AM and the bus was going to leave at 10:56AM, 
                        yet Lizzy still had not arrived. Turns out she was running late and
                        might have had to get the train, causing her to be very very late. 
                        She messaged me that she was just about to leave and catch the bus 
                        before it left the high street, so I boarded the bus and waited for 
                        it to arrive at the high street. It got there and Lizzy was nowhere 
                        to be found. I thought that was it, she was gonna be left behind and 
                        this day was gonna be in jeopardy before it had even begun. Then, 
                        out the corner of my eye, I see her run to the doors, completely out 
                        of breath, purchase a ticket, and sit down next to me. And with that, 
                        our day had started.
                        </p>
                        <br></br>
                        <br></br>
                        <p>
                        So we arrive in Edinburgh with some time on our hands and go to find 
                        Bob. Once we found Bob just beside the bear ride, we went on to get 
                        our lunch from a lovely place called Coro The Chocolate Cafe.
                        </p>
                        <br></br>
                        <iframe title="Coros" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.9470341917777!2d-3.2003283486861345!3d55.95170679969571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c796d7ea11f5%3A0xe0380a68c1c6e0fb!2sCoro%20the%20Chocolate%20Cafe!5e0!3m2!1sen!2sus!4v1659133917989!5m2!1sen!2sus" width="100%" height="550" loading="lazy"></iframe>                        <br></br>
                        <br></br>
                        <div className="grid_for_images">
                            <img src={require('../../../../Assets/food-1.jpg')} className="images_in_grid" alt="edinburgh"/>
                            <img src={require('../../../../Assets/food-2.jpg')} className="images_in_grid" alt="edinburgh"/>
                            <img src={require('../../../../Assets/tea-1.jpg')} className="images_in_grid" alt="edinburgh"/>
                            <img src={require('../../../../Assets/tea-2.jpg')} className="images_in_grid" alt="edinburgh"/>
                        </div>
                        <p>
                        A lovely little cafe just off princess street that serves some breakfast 
                        food but mostly specialises in food with chocolate on it. This was a 
                        recommendation from Bob as a place where we might get something to eat. 
                        I can't lie, I was sceptical at first, but once we got there and I saw the menu, 
                        I was in love. I ordered a toffee cookie pancake with breakfast tea as the drink, 
                        and yes it was as good as it sounds. Definite 10/10
                        </p>
                        <br></br>
                        <br></br>
                        <p>
                        Once that was done and consumed, we proceeded to the Christmas market to perhaps 
                        get something to eat and also see the Christmas market. I had been wanting to go 
                        for a while so this was a prime opportunity to go and maybe fill up on my way. So 
                        we headed over to the Christmas market, pondered at some of the pretty lights and 
                        things on display. Then got treated to a burger by Bob (thank you, Bob). Once my 
                        burger was consumed and we had spent some time in the LEGO store (always spend 
                        time in the LEGO store), we went and saw the movie.
                        </p>
                        <br></br>
                        <br></br>
                        <img src={require("../../../../Assets/spiderman.webp")} className="spiderman-image" alt="spiderman"/>
                        <p>
                        This is my opinion of the movie and will have no spoilers since that would be cringe. 
                        My opinion was that the movie was great, exciting, everything I wanted it to be. The 
                        ending happened in a way that I didn't actually expect but think that due to issues with 
                        Tom Holland's contract and him perhaps wanting to do other things, was a good way for 
                        him to say goodbye. I would give the movie an 9/10. Would recommend.
                        </p>
                        <br></br>
                        <p>
                        Once the movie was over, we went on to another restaurant called Maki and Ramen in St James 
                        Centre.
                        </p>
                        <br></br>
                        <iframe title="St James" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.6321432763225!2d-3.1890134833629724!3d55.954492372692265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c78e8beabe0f%3A0x274fc4e639541e87!2sSt%20James%20Centre%2C%20Edinburgh%20EH1%203AD%2C%20UK!5e0!3m2!1sen!2sus!4v1659134012309!5m2!1sen!2sus" width="100%" height="550" loading="lazy"></iframe>
                        <br></br>
                        <br></br>
                        <div className="grid_for_images">
                            <img src={require('../../../../Assets/food-5.jpg')} className="images_in_grid" alt="edinburgh"/>
                            <img src={require('../../../../Assets/food-6.jpg')} className="images_in_grid" alt="edinburgh"/>
                        </div>
                        <p>
                        Once finished and paid for (thank you, Lizzy), we walked Bob home to their humble abode, 
                        hung out for 10 to 15 minutes, said our goodbyes, and went on our way to get the bus. 
                        While waiting for the bus, I snapped a nice picture of the Scot Monument in the nightlight, 
                        got on the bus and bid the day, goodnight.
                        </p>
                        <img src={require('../../../../Assets/edinburgh-at-night.jpg')} className="map_1" alt="edinburgh"/>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayOutSeeingSpiderman