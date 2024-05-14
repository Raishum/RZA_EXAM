import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validatiion from './LoginValidation'
import axios from 'axios'

export const Login = () => {

    // stors the values to the email and password 
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();

    // Handles the validation
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    // Connects to the backend. Connects to the server.js to stor the data to the backend 
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validatiion(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {

                // navigate to userdash 
                if(res.data === "Success") {
                    navigate('/userdash');
                }else{
                    alert("No record found")
                }
            })
            .catch(err => console.log(err))
        }
    }

    return (
        // The layout of the login system 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    {/* email form  */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                        {/* validation */}
                    </div>
                    
                    {/* password form */}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                        {/* validation */}
                    </div>
                    {/* Button that allow the user to connect signup form the login page   */}
                    <button type='submit' className="btn btn-success w-100 rounded-0">Log in</button>
                    <Link to="/signup " className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    )
}
