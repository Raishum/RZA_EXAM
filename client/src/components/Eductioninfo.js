import React from "react";
import tiger from '../images/tiger.png'
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import map from '../images/map.png'


export const Eductioninfo = () => {

    // This is navigate the buttons to difrent pages 
    const navigate = useNavigate()
    return (


        <div >
            {/* Title Eduction us */}
            <div className="Title">
                <h1>Education </h1>
            </div>

            {/* The text that is diplayed above the cards */}
            <div className="Text">
                <h2>Riget zoo Adventure</h2>
                <p>RZA organizes educational visits to the zoo, providing students with guided tours that focus on animal behavior, conservation, and biodiversity, enriching their understanding of the natural world. Moreover, RZA offers exciting treasure hunts at the zoo, where students can explore different animal habitats while solving clues and puzzles, fostering teamwork and critical thinking skills in a fun and educational environment.</p>
            </div>



            {/* Card function for the eductional vist  */}
            <Card className="card_size">
                <img src={tiger} className="d-block w-100" text="First slide" />
                <Card.Body>
                    <Card.Title>Eductional Vists</Card.Title>
                    <Card.Text>
                        Book an eductional vist with us today! Contact us for more information
                    </Card.Text>
                    {/* The button that navigates to the eductional page  */}
                    <button onClick={() => [navigate('/education')]} className="joinus_button">Book Tickets</button>
                </Card.Body>
            </Card>

            {/* Card function for the treasure hunt */}
            <Card className="card_size">
                <img src={map} className="d-block w-100" text="First slide" />
                <Card.Body>
                    <Card.Title>Treasure hunt</Card.Title>
                    <Card.Text>
                        walk around the zoo, scan QR codes to win cool prizes and find out fun factsabout each animal.
                    </Card.Text>

                    {/* The button that navigates the the booking page  */}
                    <button onClick={() => [navigate('/booking')]} className="joinus_button">Book Tickets</button>
                </Card.Body>
            </Card>




           
        </div>
    )
}
