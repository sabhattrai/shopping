import React from 'react'
import { useContext } from 'react'
import { CounterContex } from '../contex/CounterContex'
const About = () => {
const {cart,setCart}=useContext(CounterContex);
  return (
    <div>
      <h1>About page {cart}</h1>
      <button type='button' onClick={()=>{
        setCart(cart+1)
      }}>add to cart</button>
    </div>
  )
}

export default About
