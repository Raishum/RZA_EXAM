import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validatiion  from "./SignupValidation";
import axios from 'axios'

export const Loyalty = () => {

    
// Stores the values for each naming varible 
    const [values,setValues] = useState({
        name:'',
        age:'',
        email:'',
        password:''
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
        if(errors.name === "" && errors.age === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/joinus', values)
            .then(res => {
                navigate('/userdash')
            })
            .catch(err => console.log(err))
        }
    }
    return (

        // the formate for the signup system 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-up</h2>

                {/* layout of the form  */}
                <form action="" onSubmit={handleSubmit}>
                    {/* name */}
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="Text" placeholder="Enter Name" name ='name' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.name && <span className="text-danger"> {errors.name}</span>}
                    </div>
                    {/* Age */}
                    <div className="mb-3">
                        <label htmlFor="age"><strong>Age</strong></label>
                        <input type="number" placeholder="Enter age" name ='age' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.age && <span className="text-danger"> {errors.age}</span>}
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name ='email' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name ='password' onChange={handleInput}className="form-control rounted-0"/>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    {/* button that */}
                    <button type= 'submit' className="btn btn-success w-100 rounded-0">Join us</button>
                </form>
            </div>
        </div>
    )
}
