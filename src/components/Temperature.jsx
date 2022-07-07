import React from 'react'
import { useState , useContext } from 'react';
import WeatherContext from '../context/weatherContext';

function Temperature() {
    const {temperature , minTemperature,maxTemperature,} = useContext(WeatherContext);
  return (
    <div className='card temperature'>
      <div>
            <span><i className='wi wi-thermometer' ></i> </span>
            <span>{temperature}°</span>
            <p className='small-prag'>temprature</p>
      </div>
      <div>
            <span className='min-temp'><i className='wi wi-thermometer-exterior' ></i> </span>
            <span >{minTemperature}° </span>
            </div>
            <div>
            <span className='max-temp' ><i className='wi wi-thermometer' ></i> </span>
            <span> {maxTemperature}°</span>
            <p className='small-prag'>min and max temprature</p>
      </div>
    </div>
        
  )
}

export default Temperature