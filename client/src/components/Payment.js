import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validatiion  from "./SignupValidation";
import axios from 'axios'

export const Payment = () => {

    
// stors the values to the name, number and cvv number  
    const [values,setValues] = useState({
        name:'',
        number:'',
        cvv:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    // Connects to the backend. Connects to the server.js to store the data to the backend 
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validatiion(values));
        if(errors.name === "" && errors.number === "" && errors.cvv === "") {
            axios.post('http://localhost:8081/payment', values)
            .then(res => {
                navigate('/order')
            })
            .catch(err => console.log(err))
        }
    }
    return (

        // the formate for the payment sytem system 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Payment</h2>
                {/* Handles the input from user  */}
                <form action="" onSubmit={handleSubmit}>
                    {/* card Name */}
                <div className="mb-3">
                        <label htmlFor="name"><strong>Enter card Name</strong></label>
                        <input type="Text" placeholder="Name Holder Name" name ='name' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.name && <span className="text-danger"> {errors.name}</span>}
                    </div>
                    {/* card number  */}
                    <div className="mb-3">
                        <label htmlFor="number"><strong>Enter Card Number</strong></label>
                        <input type="number" placeholder="Enter Card Number" name ='number' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.number && <span className="text-danger"> {errors.number}</span>}
                    </div>
                    {/* card cvv number  */}
                    <div className="mb-3">
                        <label htmlFor="cvv"><strong>Enter CVV Number </strong></label>
                        <input type="number" placeholder="Enter CVV Number" name ='cvv' onChange={handleInput}className="form-control rounted-0"/>
                        {errors.cvv && <span className="text-danger"> {errors.cvv}</span>}
                    </div>

                    {/* Button that allow user to sign up  */}
                    <button type= 'submit' className="btn btn-success w-100 rounded-0">Pay</button>
                    
                </form>
            </div>
        </div>
    )
}
