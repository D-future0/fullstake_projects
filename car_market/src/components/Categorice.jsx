import React from 'react'
import data from './shared/data'

const Caterogrice = () => {
  return (
    <div className='category-type'>
        <h2 style={{fontSize:'30 px'}}>Browse by type</h2>
        <div className='type'>
            {data.categories.map((category, index)=>{
                return(
                    <div key={index}>
                         <img src={category.icon} alt={category.type} width={35} height={40}></img>
                         <h3>{category.name}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Caterogrice