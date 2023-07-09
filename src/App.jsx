import React from 'react'
import "./App.css"
import Navbar from './Links/Navbar'
import {Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Home,Cart_page,Store} from "./pages/index"
import { CounterContex, SoppingItem } from './contex/CounterContex'
import { useState } from 'react'

const App = () => {
 const [cart,setCart]=useState(0)
  const[cart_item,setCart_item]=useState([])
  const additem=(item)=>{
    setCart_item([...cart_item,item])
  }
  return (
 <Container className='nb-4'>
  <SoppingItem.Provider value={{cart_item,additem}}>
  <CounterContex.Provider value={{cart, setCart}}>
  <Navbar />
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/store" element={<Store />} />
   <Route path="/cart" element={<Cart_page />}/>
 </Routes>
 </CounterContex.Provider>
 </SoppingItem.Provider>
 </Container>
 
  
  )
}

export default App
