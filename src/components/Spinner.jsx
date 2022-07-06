import React from 'react';
import imgSpinner from '../assets/image/Storm.gif'

function Spinner() {
  return (
    <img src={imgSpinner} alt='Loading...' style={{display:'inline-block',margin:'3rem auto'}} />
  )
}

export default Spinner