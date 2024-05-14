import React from "react";
import { useNavigate } from "react-router-dom";

export const Education = () => {

    const Thankyou = () => {
        alert("Thank You For Your Message! You will recive an resopns shortly");
      }
      const navigate = useNavigate()
    return (
        <div>
            {/* This is the text */}
            <div className="Text"> 
            {/* This is for the css document  */}
                <h2>Education</h2>
                <p>Welcome to our Safari Zoo, where learning comes alive amidst the wonders of the wild! We invite schools and clubs to embark on an educational journey like no other, where exploration and discovery await at every turn. Our dedicated team of tour guides are passionate about wildlife and are committed to providing an engaging experience for students of all ages. Led by experienced educators, each tour is tailored to suit the group's specific interests and curriculum requirements. From the intricate ecosystems of the rainforest to the vast plains of the savannah, our guides bring the animal kingdom to life, sharing fascinating facts and stories along the way.</p>
            </div>

            {/* This is the contact information  */}
            <div className="Text">
                <h2>Contact info:</h2>
                <h4>Email Address:</h4>
                <p>Riget_zoo_adventures@education.com</p>
                <h4>Phone Number:</h4>
                <p>0161 597 5689</p>
            </div>
            
            <div className="d-flex justify-content-center ">
            <div className="p-3 rounded ">
            <h2>Contact Us</h2>
            {/* This is the form for the layout */}
                <form action="">

                    {/* This is for the name  */}
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" name='email'  className="form-control rounted-0"/>
                    </div>

                    {/* This is for the email  */}
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" name='email'  className="form-control rounted-0"/>
                    </div>

                    {/* This is for the message system  */}
                    <div className="mb-3">
                        <label>Message</label>
                        <textarea type="text" placeholder="Enter Message" name='message'  className="form-control rounted-0"/>
                        <button onClick={Thankyou} className="btn btn-success ">Submit</button>
                    </div>

                    {/* This is for the map functin and a link to the location of the zoo  */}
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316761.76126775163!2d-0.6336387785708251!3d51.66530580387431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad73297f857%3A0xb1723f26e03c12a8!2sLondon%20Zoo!5e0!3m2!1sen!2suk!4v1713541268209!5m2!1sen!2suk" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </form>

                {/* This is the button function it navigaes to the eductioninfo page  */}
                <button onClick={() => [navigate('/eductioninfo')]} className="joinus_button">More info</button>
            </div>
        </div>

        </div>
    )
}

