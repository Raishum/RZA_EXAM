import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import panda from '../images/panda.png'
import tiger from '../images/tiger.png'
import monkey from '../images/monkey.png'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    
    // This is navigate the buttons to difrent pages 
   const navigate = useNavigate()
    return (

       
        <div >
            {/* Title About us */}
            <div className="Title">
                <h1>About us ?</h1>
            </div>

            {/* Carousel */}
            <div className="Carousel">
            <Carousel>
                <Carousel.Item>
                    {/* get the images form the img that has been immported above */}
                    <img src={panda} className="d-block w-100" text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={tiger} className="d-block w-100" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={monkey} className="d-block w-100" text="Third slide" /> 
                </Carousel.Item>
            </Carousel>
            </div>

            {/* The text that is diplayed under the Carousel*/}
            <div className="Text">
                <h2>Riget zoo Adventure</h2>
                <p>Welcome to Riget Zoo Adventure, where the thrill of the safari meets the comfort of a weekend getaway. Nestled in the heart of our picturesque landscape, our zoo offers an array of activities, from luxurious on-site hotels to captivating wildlife performances and enriching educational experiences.As you step into Riget Zoo Adventure, prepare to be mesmerized by the diversity of our wildlife. From the majestic lions and powerful tigers to the colorful birds and gentle giants like elephants, our safari-style animal encounters promise to delight visitors of all ages. Whether you're snapping photos of our resident pride, marveling at the grace of our soaring birds, or observing the playful antics of our elephants, every moment spent with our captivating creatures is a journey into the wild. </p>
            </div>
        {/* The button that when clicked navigates to a new page */}
           <button onClick={() => [navigate('/loyalty')]} className="joinus_button">Join us</button>
        </div>
    )
}
