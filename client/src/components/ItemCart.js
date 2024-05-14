import React from "react";
import { useCart } from "react-use-cart"

export const ItemCart = (props) => {
    const { addItem } = useCart();

    // Allows the user to add the item to ther Carts 
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top img-fluid"/>
                    <div class="card-body text-center">
                        {/* calles the varibles the valuses title, price and desc  */}
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-text">£{props.price}</h5>
                        <p class="card-text">{props.desc}</p>
                        {/* Button that ads the item to the cart  */}
                        <button className="btn btn-success" onClick={ () =>addItem(props.item)}>Add to Cart</button>
                    </div>
            </div>
        </div>
    )
}
