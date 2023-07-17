import React , {createContext} from 'react'
import { useState } from 'react'
import { PRODUCTS } from '../Products'
export const shopcontext = createContext(null)

const getdefaultcart = () =>{
    let cart = {}
    for(let i=1; i<=PRODUCTS.length; i++)
    {
        cart[i] = 0;
    }
    return cart;
}



function Shopcontextprovider({children}) {
    const [cartitems , setcartitems] = useState(getdefaultcart())
  
    const addtoCart = (itemid)=>{
        setcartitems((prev) =>({...prev, [itemid]: prev[itemid]+1 }))
    }

    const removefromcart = (itemid)=>{
        setcartitems((prev) =>({...prev, [itemid]: prev[itemid]-1 }))
    }

    const updateCartItems = (itemCount,itemid) =>{
        setcartitems((prev) =>({...prev, [itemid]:itemCount}))
       }
    const subTotalOfItem = (itemCount,itemid)=>{return (PRODUCTS[itemid-1].price)*itemCount}
    const grandToatal = ()=>{
        let total = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            total += itemInfo.price * cartitems[item]
            }
        }
        return total;
    }

    const differentCartItemsCount = ()=>
        {
            let count = 0;
            for(const item in cartitems){
                if(cartitems[item]>0){
                  count++;
                }
            }
            return count;
        }
    

    const contextvalue = {cartitems, addtoCart, removefromcart,updateCartItems,subTotalOfItem,grandToatal,differentCartItemsCount}
    console.log(cartitems)


  
  return (
    <shopcontext.Provider value ={contextvalue}>
        {children}
    </shopcontext.Provider>
  )
}

export default  Shopcontextprovider

