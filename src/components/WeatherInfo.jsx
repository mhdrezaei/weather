import React from 'react'

function WeatherInfo() {
  return (
    <>
        <hr className='weather-hr'/>
    <div className='weather-info'>
        <div className='weather-icon'>
            <span><i class="wi wi-night-sleet"></i></span>
        </div>
        <div className='weather-description'>
            <div className='card temperature'>
            <span><i className='wi wi-thermometer' ></i> </span>
                <span> 23°</span>
            </div>
            <div className='card weather-status'>
                <span>status : windy</span>
            </div>
            <div className='card location'>
                <span>IR -tehran</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default WeatherInfo