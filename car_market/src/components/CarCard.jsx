import React from 'react'
import { MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";

const CarCard = ({image, name, type, model, price, fuelType, gearType, miles}) => {
  return (
    <div style={{display:`grid`, placeItems:'center', cursor:'default'}}>
        <img src={image} alt='car imgae' width={300}></img>
        <div style={{border:'solid gray 1px', borederTop:'none'}}>
            <h3 style={{padding:`4px`}}>{name}</h3>
            <hr width={300}></hr>
            <div style={{display:'flex', justifyContent:'space-around'}}>
              <div style={{display:`grid`, placeItems:'center'}}>
              <MdOutlineSpeed style={{fontSize:`20px`}}/>
              {miles}
              </div>
              <div style={{display:`grid`, placeItems:'center'}}>
              <LuFuel style={{fontSize:`20px`}}/>
              {fuelType}
              </div>
              <div style={{display:`grid`, placeItems:'center'}}>
              <GiGearStickPattern style={{fontSize:`20px`}}/>
              {gearType}
              </div>
            </div>
            <hr width={300}></hr>
            <div style={{display:'flex', justifyContent:'space-between', textAlign:'center'}}>
              <h3 style={{margin:'0px'}}>${price}</h3>
              <p style={{color:'blue'}}>view details</p>
            </div>
        </div>
    </div>
  )
}

export default CarCard