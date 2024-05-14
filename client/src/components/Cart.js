import React from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

    const navigate = useNavigate()

    // Stors the valuses that don't change 
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    // Handles the cart 
    if (isEmpty) return <h1 className="text-center">Your Cart is isEmpty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="text-center">
                    <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return(
                                <tr key={index}>
                                    <td>
                                        {/* <img src={item.img} style={{ height: '6rem' }} /> */}
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>

                                    {/* + or - from the cart on each item slected  */}
                                    <td>
                                        <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* This displays the total price */}
                <div className="col-auto ms-auto">
                    <h2 className="text-center">total price: {cartTotal}</h2>
                </div>
                
                <div className="col-auto">
                    {/* A button to clear the cart or proceed to payment  */}
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
                    <button onClick={() => [navigate('/loginbooking')]} className="btn btn-success m-2 ">Pay Now</button>
                </div>
            </div>
        </section>
    )
}


