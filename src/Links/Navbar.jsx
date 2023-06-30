import React,{useState} from 'react'
import "./navbar.css"
import { useContext } from 'react'
import { CounterContex } from '../contex/CounterContex'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {cart,setCart}=useContext(CounterContex)
  return (
    <div className='main_navbar'>
         <div className='container'>
            {/* <a href='/'>Home</a>
            <a href='about'>About</a>
            <a href='store'>Store</a> */}
            <Link to="/">Home</Link>
            <Link to='about'>About</Link>
            <Link to='store'>Store</Link>
        </div>
       <div className='with_number'>
        <button type='button'>cart item</button>
        <h3>{cart}</h3>
        </div>
      </div>
  )
}

export default Navbar
