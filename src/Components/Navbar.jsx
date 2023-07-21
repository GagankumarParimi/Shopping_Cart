import React ,{useContext}from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import { shopcontext } from '../context/shopcontext'


function Navbar() {
  const {differentCartItemsCount} = useContext(shopcontext)
  return (
   <div className ='bg-[#080808] p-4'>
     <div className = 'flex flex-row justify-between'>
        <p className='text-slate-50 font-lobster text-[30px]'>Shopsters</p>
        <div className=' flex justify-end '>
        <Link to = '/' className = 'text-xl text-white mx-5 mt-2'>Home</Link>
        <Link to = '/cart'>
            <ShoppingCart className='text-white mt-1' size={40}/>
        </Link>
          {
              differentCartItemsCount() && <span className='text-slate-50 absolute ml-[7.2rem] mt-[-0.4rem] bg-[#dc1a1a] rounded-full px-1'>{differentCartItemsCount()}</span>

          }
        </div>
    </div>
   </div>
  )
}

export default Navbar
