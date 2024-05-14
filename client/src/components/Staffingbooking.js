
// Display booking when staff login 
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Staffingbooking = () => {
    const [booking, setBooking] = useState([]);

    // get data from booking 
    useEffect(() => {
        axios.get('http://localhost:8081/booking')
            .then(res => setBooking(res.data))
            .catch(err => console.log(err));
    }, []);

    // Name of the title for the data
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Arival</th>
                            <th>Departure</th>
                            <th>Adult</th>
                            <th>Children</th>
                            <th>Hotels</th>
                        </tr>
                    </thead>
                    {/* Iterates through an array and rendr a list of elements  */}
                    <tbody>
                        {
                            // This goes through the booking in sql database and displays it 
                            booking.length > 0 && booking.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.arival}</td>
                                    <td>{booking.departure}</td>
                                    <td>{booking.adult}</td>
                                    <td>{booking.children}</td>
                                    <td>{booking.hotels}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
