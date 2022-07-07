import React from 'react'
import  { useContext } from 'react'
import WeatherContext from '../context/weatherContext'
function Wind() {
const {windSpeed , windDeg , city , country } = useContext(WeatherContext);
  return (
    <div className='card wind'>
        <div className='d-flex'>
    <span><i className={`wi wi-wind-beaufort-${windSpeed}`}></i> </span>
    <span> {windSpeed}</span>
    </div>
    <div className='d-flex'>
    <span><i className='wi wi-direction-up-right'></i> </span>
    <span> {windDeg} °</span>
    </div>
    <div className='d-flex'>
    
    <span>{country} - {city}</span>
            
    </div>
    </div>
  )
}

export default Wind