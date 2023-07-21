import React from 'react'
import {PRODUCTS} from '../Products'
import Productcard from './Productcard'

function Home() {
  return (
    <div className = 'grid grid-cols-1 border-y-black md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 place-items-center mt-3'>
      {PRODUCTS.map((product)=>{
         return <Productcard key = {product.id} data = {product}/>
      })}
    </div> 
  )
}

export default Home
