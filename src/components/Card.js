import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

export default function Card() {

    const [nasa, setNasa] = useState([]);
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(2);
    const [day, setDay] = useState(2);

    const handleChangeY = e => {
        setYear(e.target.value);
    };

    const handleChangeM = e => {
        setMonth(e.target.value);
    };

    const handleChangeD = e => {
        setDay(e.target.value);
    };

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
    .then(response =>
        setNasa(response.data)
        .catch(error => console.log(error))
        )
}, [year, month, day])
}