import React from 'react'
import { MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";

const CarCard = ({image, name, type, model, price, fuelType, gearType, miles}) => {
  return (
    <div className='carCard'>
      <h4 style={{position:"absolute", margin:"6px",padding:"3px 6px",color:"white",top:"0.25rem", left:"0.35rem", background:"green", borderRadius:"10px"}}>new</h4>
        <img src={image} alt='car imgae'></img>
        <div>
            <h3 style={{padding:`4px`}}>{name}</h3>
            <hr width={250}></hr>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:`grid`, placeItems:'center'}}>
              <MdOutlineSpeed style={{fontSize:`15px`}}/>
              {miles}
              </div>
              <div style={{display:`grid`, placeItems:'center'}}>
              <LuFuel style={{fontSize:`15px`}}/>
              {fuelType}
              </div>
              <div style={{display:`grid`, placeItems:'center'}}>
              <GiGearStickPattern style={{fontSize:`15px`}}/>
              {gearType}
              </div>
            </div>
            <hr width={250}></hr>
            <div style={{display:'flex', justifyContent:'space-between', textAlign:'center'}}>
              <h3 style={{margin:'0px'}}>${price}</h3>
              <p style={{color:'blue'}}>view details</p>
            </div>
        </div>
    </div>
  )
}

export default CarCard