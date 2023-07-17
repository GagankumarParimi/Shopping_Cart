import React from 'react'
import {PRODUCTS} from '../Products'
import Productcard from './Productcard'

function Home() {
  return (
    <div className = 'grid grid-cols-3 gap-3 place-items-center mt-3'>
      {PRODUCTS.map((product)=>{
         return <Productcard key = {product.id} data = {product}/>
      })}
    </div>
  )
}

export default Home
