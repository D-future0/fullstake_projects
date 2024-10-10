import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <div>
        <div className='hero-titles'>
            <p style={{fontSize:'25px', fontWeight:'light'}}>find cars for sell and for rent near you</p>
            <h2 style={{fontSize:'60px'}}>find your dream car</h2>
        <Search/>
        <img src='/car.png' alt='car' style={{width:'70%'}}></img>
        </div>
    </div>
  )
}

export default Hero