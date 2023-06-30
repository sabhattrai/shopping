import React from 'react'
import "./App.css"
import Navbar from './Links/Navbar'
import {Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Home,About,Store} from "./pages/index"
import { CounterContex } from './contex/CounterContex'
import { useState } from 'react'

const App = () => {
 const [cart,setCart]=useState(0)
  return (
 <Container className='nb-4'>
  <CounterContex.Provider value={{cart, setCart}}>
  <Navbar />
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/store" element={<Store />} />
   <Route path="/about" element={<About />}/>
 </Routes>
 </CounterContex.Provider>
 </Container>
  
  )
}

export default App
