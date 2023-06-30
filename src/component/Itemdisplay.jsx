import React,{useState,useContext, useEffect} from 'react'
import "./itemdisplay.css"
import { CounterContex } from '../contex/CounterContex'
const Itemdisplay = (props) => {
  let numb=1
    const {cart,setCart}=useContext(CounterContex)
    const[name,setName]=useState("add to cart")
    const [toggle,setToggle]=useState(1)
 useEffect(()=>{
    localStorage.setItem("toggle",JSON.stringify(toggle))
  },[toggle])
    const btn_name=()=>{
        setToggle(toggle*-1)
        if (toggle===1){
            setCart(cart+1)
            setName("remove")
        }
        if (toggle===-1){
        setCart(cart-1)
        setName("add to cart")
        }
    }
  return (
    <div className='main_container' key={props.key}>
      <img src={props.image} />   
      <h1 className='h1'>price ${props.price}</h1>     
      <button type='button' className='btn' onClick={()=>{
      btn_name()
      }}>{name}</button>
    </div>
  )
}

export default Itemdisplay
