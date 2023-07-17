import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home' 
import Cart from './Components/Cart'
import Shopcontextprovider from './context/shopcontext'

function App() {
  return (
    <div>
      <Shopcontextprovider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = "/" element = {<Home/>}/> 
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </Shopcontextprovider>
    </div>
  )
}

export default App


