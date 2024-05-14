import React from "react";
import lion from '../images/lion.mp4'

import { useNavigate } from "react-router-dom";

export const Order = () => {
    
    // This is navigate the buttons to difrent pages 
   const navigate = useNavigate()
    return (

       
        <div >
            {/* Title order conformation us */}
            <div className="Title">
                <h1>Order  Conformation!</h1>
            </div>

            {/* Diplays the images of the tiger auto play with no volume */}
            <div class="video">
                <video className="zoo_video" alt="Tiger video" loop muted autoplay="autoplay"> 
                    <source src={lion} type="video/mp4"/>
                </video>
            </div>

            {/* This text will go underneat the video */}
            <div className="Text">
                <h2>Thank You For Your Order </h2>
                <p>Thank you for your booking! You will shortly receive an email containing all your booking information, including your booking number, etc. Thank you once again for choosing Riget Zoo Adventure!</p>
            </div>

        {/* The button that when clicked navigates to the home page */}
           <button onClick={() => [navigate('/')]} className="joinus_button">Home</button>
        </div>
    )
}

