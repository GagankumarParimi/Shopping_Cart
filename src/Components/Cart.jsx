import React ,{useContext,useState} from 'react'
import { PRODUCTS } from '../Products'
import Cartcard from './Cartcard' 
import { shopcontext } from '../context/shopcontext'

function Cart() {
  const {cartitems,grandToatal} = useContext(shopcontext) 
  const [buttonText, setButtonText] = useState('Buy Now');
  let total =  grandToatal();
  return (
   <>
      <div className='flex justify-center my-6'>
        <p className='text-2xl text-black font-bold'>CART ITEMS</p>
      </div>
      <div className='flex flex-col items-center'>
      {
        PRODUCTS.map(product =>{
          if(cartitems[product.id] !== 0)
          {
            return (
              <>
                 <Cartcard key= {product.id} data = {product}/>
              </>
            )
          }
          return null
        })
      }
    </div>

    <div className='flex justify-center my-4'>
      {total>0 ?
       <div className='flex flex-col'>
          <p className='text-2xl font-bold'>Total Amount :$ {total}</p>
         <button className='bg-black px-6 py-2 text-slate-50' onClick={()=>setButtonText('Your Order has been Placed Thank you!')}>{buttonText}</button>
       </div>
       :
      <div>
        <p className='text-2xl '>Your Cart is Empty</p>
      </div>
      }
    </div>
    
   </>
  )
}

export default Cart
