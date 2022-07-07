import React, { useState , useContext } from 'react'
import WeatherContext from '../context/weatherContext'
import Spinner from './Spinner';
import Temperature from './Temperature'
import Wind from './Wind'
import WeatherStatus from './WeatherStatus';

function WeatherInfo() {
    const {showInfo , loading} = useContext(WeatherContext);
    if(showInfo && loading){
  return (
    
    <>
        <hr className='weather-hr'/>
    <div className='weather-info'>
        <div className='weather-icon'>
            <span><i class="wi wi-night-sleet"></i></span>
        </div>
        <div className='weather-description'>
            <Temperature/>
            <WeatherStatus/>
            <Wind/>
        </div>
    </div>

    </>
  )
    }else if(showInfo && !loading){
        return (<Spinner/>)
    
}else{
   return (<></>) 
  }
}

export default WeatherInfo