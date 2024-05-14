import React from "react";
import video from '../images/video.mp4'

import { useNavigate } from "react-router-dom";

export const Userdash = () => {
    
    // This is navigate the buttons to difrent pages 
   const navigate = useNavigate()
    return (

       
        <div >
            {/* Title Welcom us */}
            <div className="Title">
                <h1>Welcom To RZA!</h1>
            </div>

            {/* Video of the the tiger auto play with no volume*/}
            <div class="video">
                <video className="zoo_video" alt="Tiger video" loop muted autoplay="autoplay"> 
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            {/* display the text*/}
            <div className="Text">
                <h2>Welcom To Our Team </h2>
                <p>We're thrilled to have you join us on this wild and wonderful journey through the world of zoology and conservation. As a member of our team, you'll embark on exciting adventures, exploring the diverse habitats and fascinating creatures that call our zoo home. Get ready to dive into a world of discovery, where every day brings new opportunities to learn, grow, and make a difference. Whether you're passionate about wildlife conservation, animal care, or simply love sharing the magic of the animal kingdom with others, you'll find a place to thrive here at Riget Zoo Adventure. As a valued member of our team, you'll be the first to hear about our latest news, upcoming events, and exclusive offers. Keep an eye on your inbox for regular updates and insider insights, delivered right to your email. From behind-the-scenes glimpses to special discounts and promotions, we'll make sure you're always in the loop and ready to join us for the next adventure.</p>
            </div>
        {/* The button that when clicked navigates to booking page */}
           <button onClick={() => [navigate('/booking')]} className="joinus_button">Book Tickets</button>
        </div>
    )
}
