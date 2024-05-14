import React from "react";
import panda from '../images/panda.png'
import { useNavigate } from "react-router-dom";

export const Policy = () => {
    
    // This is navigate the buttons to difrent pages 
   const navigate = useNavigate()
    return (

       
        <div >
            {/* Title About us */}
            <div className="Title">
                <h1>Policy Page</h1>
            </div>

            {/* The text that is diplayed about cookies policy*/}
            <div className="Text">
                <h2>Cookie Policy</h2>
                <p>In accordance with our commitment to transparency and user privacy, the zoo's cookie policy outlines how we utilize cookies on our website. Cookies are used to enhance user experience, analyze site traffic, and personalize content. By using our website, you consent to the use of cookies in accordance with this policy.</p>
            </div>

            {/* The text that is diplayed about Code of conduct*/}
            <div className="Text">
                <h2> Code of Conduct</h2>
                <p>Our zoo is committed to providing a safe, enjoyable, and respectful environment for all visitors, staff, and animals. Our code of conduct policy outlines the behavior expected from everyone on zoo premises. This includes respecting the animals and their habitats, following staff instructions, and treating fellow visitors with courtesy and consideration. By adhering to this code of conduct, we ensure that everyone can have a positive experience at our zoo.</p>
            </div>

            {/* The text that is diplayed about Privacy polcy*/}
            <div className="Text">
                <h2>Privacy Policy</h2>
                <p>Our zoo is dedicated to protecting the privacy of our visitors and users. Our privacy policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services. We are committed to transparency and ensuring that your information is handled responsibly and securely. By using our website or services, you consent to the practices outlined in our privacy policy.</p>
            </div>

            {/* Image of panda  */}
            <div className="policy_image">
                <img src={panda} alt="panda" />
            </div>
        
        </div>
    )
}
