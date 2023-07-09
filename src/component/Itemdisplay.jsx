import React,{useState,useContext} from 'react'
import "./itemdisplay.css"
import { CounterContex, SoppingItem } from '../contex/CounterContex'
const Itemdisplay = ({num,price,image}) => {
    const {cart,setCart}=useContext(CounterContex)
    const {additem}=useContext(SoppingItem)
    const[name,setName]=useState("add to cart")
    const [toggle,setToggle]=useState(1)
 
    const btn_name=(num)=>{
        setToggle(toggle*-1)
            
        if (toggle===1){
            setCart(cart+1)
            setName("remove")
        }
        if (toggle===-1){
        setCart(cart-1)
        setName("add to cart")
        }
        additem(num)

    };
  return (
    <div className='main_container' key={num}>
      <img src={image} />   
      <h1 className='h1'>price ${price}</h1>     
      <button type='button' className='btn' onClick={()=>{
      btn_name(num)
      }}>{name}</button>
    </div>
  )
}

export default Itemdisplay
