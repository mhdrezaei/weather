import React from 'react'
import { useState , useContext } from 'react';
import WeatherContext from '../context/weatherContext';

function Temperature() {
    const {temperature} = useContext(WeatherContext);
  return (
    <div className='card temperature'>
            <span><i className='wi wi-thermometer' ></i> </span>
                <span>{temperature}°</span>
            </div>
  )
}

export default Temperature