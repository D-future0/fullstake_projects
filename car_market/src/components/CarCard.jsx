import React from 'react'

const CarCard = ({image, name, type, model, price, fuelType, gearType, miles}) => {
  return (
    <div>
        <img src={image} alt='car imgae' width={300}></img>
        <div>
            <h3 style={{padding:`4px`}}>{name}</h3>
        </div>
    </div>
  )
}

export default CarCard