import React ,{useContext}from 'react'
import {shopcontext} from '../context/shopcontext'
function Cartcard(props) {
    const {id,productName , price , productImage} = props.data
    const {cartitems, addtoCart, removefromcart,updateCartItems,subTotalOfItem} = useContext(shopcontext)
    
  return (
      <>
<div className="flex justify-start lg:items-center w-[90%] lg:w-[60%] border-2 border-y-black">
  <div className="lg:w-full lg:h-72 flex-cal lg:flex mx-5 lg:mx-0 ">
    <img className="lg:h-72  lg:w-72 " src={productImage} alt="" />
    <div className="flex flex-col  w-full ">
      <div className=" lg:h-24 flex justify-evenly lg:justify-between ">
        <p className="text-xl font-semibold">{productName}</p>
        <p className="text-xl font-bold text-slate-400">${price}</p>
      </div> 
      <div className="flex mt-5 lg:mt-0 justify-center lg:justify-start">
        <p className='text-xl font-semibold  text-slate-400'><span className='text-xl font-semibold text-black'>SubTotal</span> : ${subTotalOfItem(cartitems[id],id)}</p>
      </div>
      <div className=" h-24 flex justify-center lg:justify-start items-center">
        <div>
          <button className=" text-slate-50 bg-black px-2 mx-2" onClick={()=>{removefromcart(id)}}>
            -1
          </button>
          <input type='text' value={cartitems[id]} className=' w-10 border-2  text-black' onChange={(e)=>{updateCartItems(Number(e.target.value),id)}}/>
         
          <button className=" text-slate-50 bg-black px-2 mx-2 " onClick={()=>{addtoCart(id)}}>
            +1
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-5 lg:mb-0 lg:justify-start items-center  lg:h-24 ">
        <button className=" bg-black text-slate-50 px-6 py-2" onClick={()=>{
          for(let i =0;i<cartitems[id];i++){removefromcart(id)}
        }}>
          Remove
        </button>
      </div>
    </div>
  </div>
</div>

 



        
        
      </>

  )
}

export default Cartcard


