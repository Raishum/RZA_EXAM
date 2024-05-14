import React from "react";
import hotle from '../images/hotle.png'
import { useNavigate } from "react-router-dom";

export const Hotles = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* This is the text  */}
            <div className="Text">
                <h2>Hotel</h2>
                <p>Welcome to Serengeti Lodge, where the adventure of a safari meets the comfort of home in the heart of the wild. Nestled amidst the breathtaking landscapes of our safari zoo, Serengeti Lodge offers an unparalleled experience for nature enthusiasts and wildlife lovers alike. Our on-site accommodations provide the perfect retreat after a day of exploration, allowing you to unwind in the midst of stunning natural beauty. Step into your luxurious safari-inspired room, where modern amenities meet rustic charm. Each accommodation is thoughtfully designed to immerse you in the ambiance of the wilderness while ensuring your comfort and convenience. Relax on your private balcony and soak in panoramic views of the savannah, where herds of animals roam freely against the backdrop of a vibrant sunset. But the adventure doesn't end when the sun goes down. Join us for a gourmet dining experience at our lodge restaurant, where you can savor delicious meals crafted from locally sourced ingredients. After dinner, gather around the campfire and swap stories with fellow travelers under the starlit African sky. At Serengeti Lodge, we believe that every moment of your safari experience should be unforgettable. Whether you're embarking on a thrilling game drive or simply lounging by the pool, our dedicated staff is committed to ensuring that your stay with us is nothing short of extraordinary. Welcome to your home away from home in the heart of the wild.</p>
            </div>

            {/* This is the image  */}
            <div className="hotel_image">
                <img src={hotle} alt="hotel" />
            </div>
            
            {/* This is the button */}
            <button onClick={() => [navigate('/booking')]} className="hotel_button">Hotel </button>

        </div>
    )
}
