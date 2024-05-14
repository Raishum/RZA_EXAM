import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validatiion  from "./SignupValidation";
import axios from 'axios'

export const Signup = () => {



    // stors the values to the name, email and password 
    const [values,setValues] = useState({
        name:'',
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
        // Validatiion handling 
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
    }
    return (

        // the formate for the signup system 
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-up</h2>
                <form action="" onSubmit={handleSubmit}>
                    {/* name */}
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="Text" placeholder="Enter Name" name ='name' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.name && <span className="text-danger"> {errors.name}</span>}
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name ='email' onChange={handleInput} className="form-control rounted-0"/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name ='password' onChange={handleInput}className="form-control rounted-0"/>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>

                    {/* Button that allow user to sign up  */}
                    <button type= 'submit' className="btn btn-success w-100 rounded-0">Sign up</button>
                    <Link to="/Login " className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    )
}
