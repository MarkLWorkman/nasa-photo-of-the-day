import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

export default function Card() {

    const [nasa, setNasa] = useState([]);
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(2);
    const [day, setDay] = useState(2);
}