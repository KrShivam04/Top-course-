import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='loading-container'>
        <div className="spinner"></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner