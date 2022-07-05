import React from 'react'

function Search() {
  return (
    <>
        <div className='wrap' >
            <div className='search-form' >
                <input className='input-text' type='text' placeholder='Search cities...'/>
                <button className='btn' >Search</button>
            </div>
        </div>
    </>
  )
}

export default Search