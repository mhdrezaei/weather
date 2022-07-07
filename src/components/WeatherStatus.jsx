import React from 'react'
import  { useContext } from 'react'
import WeatherContext from '../context/weatherContext'

function WeatherStatus() {
    const {humidity , weatherStatus , visibility , } = useContext(WeatherContext);
  return (
    <div className='card weather-status'>
        <div className='d-flex'>
    <span><i className='wi wi-night-clear'></i> </span>
    <span> {weatherStatus}</span>
    </div>
    <div className='d-flex'>
    <span><i className='wi wi-humidity'></i> </span>
    <span> {humidity} %</span>
    </div>
    <div className='d-flex'>
    <span><i className='wi wi-refresh-alt'></i></span>
    <span> {visibility} KM</span>
    </div>
    </div>
  )
}

export default WeatherStatus