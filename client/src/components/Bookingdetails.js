import axios from "axios";
import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";


export const Bookingdetails = () => {
    const [values, setValues] = useState({
        name:'',
        email:'',
        arival:'',
        departure:'',
        adult:'',
        children:'',
        hotels:''
    })
    // This is connecting the form to the ServiceWorkerRegistration.js page 
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/booking', values)
        .then(res => {
            navigate('/payment')
        })
        .catch(err => console.log(err));
    }
    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Booking</h2>
                {/* This is the layout of form and the form itself  */}
                <form onSubmit={handleSubmit} >
                <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="Text" placeholder="Enter Name" name ='name'  className="form-control rounted-0" onChange={handleInput}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name ='email' className="form-control rounted-0" onChange={handleInput}/>
                       
                    </div>

                    <div className="mb-3">
                        <label htmlFor="arival"><strong>Arival</strong></label>
                        <input type="date" name ='arival' className="form-control rounted-0" onChange={handleInput}/>
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="departure"><strong>Departure</strong></label>
                        <input type="date"  name ='departure'  className="form-control rounted-0" onChange={handleInput}/>
                        
                    </div>
`                           {/* This is the dropdown menu  */}
                    <div className="mb-3">
                        <label htmlFor="adult">Adult £10</label>
                        <select  name ='adult' className="form-control rounted-0" onChange={handleInput}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="children"><strong>Children £10</strong></label>
                        <select  name ='children'  className="form-control rounted-0" onChange={handleInput}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="hotels"><strong>Hotels £40</strong></label>
                        <select  name ='hotels' className="form-control rounted-0" onChange={handleInput}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>


                    {/* Button that allow user to sign up  */}
                    <button  className="joinus_button">Book</button>
                </form>
            </div>
        </div>
    )
}


