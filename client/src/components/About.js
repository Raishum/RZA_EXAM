import React from "react";
import hotle from '../images/hotle.png'
import zoo from '../images/zoo.png'
import education from '../images/education.png'
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate()
    return (
        <div>

            {/* This is the text each peac of text is stored in green box  */}
        <div className="Text">
            <h2>About Us</h2>
            <p>Riget zoo Adventure offers an enchanting destination that seamlessly blends the excitement of a wildlife safari with the comfort of a luxurious hotel stay. As you enter the gates, a world of adventure unfolds before you, where every corner teems with the wonders of the animal kingdom. The Safari-Zoo boasts a sprawling landscape dotted with lush greenery, expansive plains, and winding rivers, all meticulously designed to mimic the natural habitats of its diverse inhabitants. From majestic lions and graceful giraffes to playful elephants and elusive cheetahs, the park is home to an impressive array of wildlife, offering visitors the rare opportunity to observe these magnificent creatures up close in their element! </p>
        </div>

            {/* This is to display the images in a row and keep all in a line  */}
            <div class="row">
                <div class="column">
                    <img src={hotle} className="hotle_about" alt="hotle" />
                </div>
                <div class="column">
                    <img src={zoo} className="zoo_about" alt="zoo"/>
                </div>
                <div class="column">
                    <img src={education} className="education_about" alt="eduction" />
                </div>
            </div>

            {/* This is the button that navigate to each page  */}
            <button onClick={() => [navigate('/booking')]} className="hotel_button">Hotel </button>
            <button onClick={() => [navigate('/zoo')]} className="zoo_button">Zoo</button>
            <button onClick={() => [navigate('/education')]} className="educational_button">Education</button>
        </div>
    )
}
