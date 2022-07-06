import React from 'react'
import { useState , useContext } from 'react';
import WeatherContext from '../context/weatherContext';

function Location() {
    const {city , country } = useContext(WeatherContext);
  return (
    <div className='card location'>
                <span>{country} - {city}</span>
            </div>
  )
}

export default Location