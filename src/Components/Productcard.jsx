import React, { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'





function Productcard(props) {
    const {id,productName , price , productImage} = props.data
    const { addtoCart , cartitems}= useContext(shopcontext)
  return ( 
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
    <img
      className="max-w"
      src={productImage}
      alt="imag"
    />
    <div className="grid grid-cols-1 gap-3 justify-items-center">
      <div className="font-bold text-xl mb-2">{productName}</div>
      <p className="text-gray-700 text-2xl">
        ${price}
      </p>
      <button  onClick={()=>addtoCart(id)} className = "bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 mb-2 rounded-full border-gray-950">
        Add To Cart  {cartitems[id] > 0 &&  <>({cartitems[id]})</>}
        </button>
      
    </div>
   
  </div>
  
  )
}

export default Productcard
