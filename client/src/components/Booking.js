// The main page for the booking sytem and were all the pages are linked togeter 
import React from "react";
import { Book} from '../components/Book'
import { Cart } from "./Cart";
import { CartProvider} from 'react-use-cart'

export const Booking = () => {
    return (
        <>
            <CartProvider>
                <Book/>
                <Cart/>
            </CartProvider>
        </>
    )
}
