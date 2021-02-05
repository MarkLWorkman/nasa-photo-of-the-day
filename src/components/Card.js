import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';

const StyledDate = styled.div`
    &:hover {
        background-color: red;
        transition: 0.5s ease-in-out;
    }
    transition: 0.5s ease-in-out;

    img {
        width: 50%;
        height: 50%;
    }
`;

function Card() {

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
    )
    .catch(error => console.log(error))
}, [year, month, day])

    return (
        <StyledDate>
            <h1>{nasa.date}</h1>
            <img className='nasaPic' src={nasa.hdurl} alt='space image'/>
            <p className='description'>Description: {nasa.explanation}</p>
            <p>Copyright: {nasa.copyright}</p>
            <p>What day would you like to see?</p>
            <div className='DateSelect'>
                Year
                <input
                type='text'
                placeholder='year'
                value={year}
                onChange={handleChangeY}
                />

                Month
                <input
                type='text'
                placeholder='month'
                value={month}
                onChange={handleChangeM}
                />

                Day
                <input
                type='text'
                placeholder='day'
                value={day}
                onChange={handleChangeD}
                />
            </div>
        </StyledDate>
    )
}

export default Card;