import React from "react";
import { ItemCart } from "./ItemCart";
import data from "./data"

export const Book = () => {

    return (
        <>

        {/* Displays this at the top of the page  */}
            <h1 className="text-center">All Booking</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">

                    {/* Handles the data from the data page  */}
                    {data.productData.map((item, index)=>{
                        return(
                            <ItemCart img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )
                    })}
                </div>    
            </section> 
        </>
    )
}


export default Book