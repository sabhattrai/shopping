import React from 'react'
import "./store.css"
import { useContext } from 'react'
import { CounterContex, SoppingItem } from '../contex/CounterContex'
const Store = () => {
  const {cart,setCart}=useContext(CounterContex)

  return (
    <div className='store_main'>
    <div className='title'>
      <h1>sopping items</h1>
    </div>
    <h1>you have added {cart} item</h1>
  
    </div>
     )
}

export default Store
