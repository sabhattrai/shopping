import React from 'react'
import { Item } from '../data/Item'
import "./home.css"
import Itemdisplay from '../component/Itemdisplay'
const Home = () => {

  return (
    <div>
      <h1>Home page </h1>
      <div className='Item_image' key={Item.id}>
       
        {
          Item.map(Item=>(
         <Itemdisplay num={Item.id} image={Item.imgUrl} price={Item.price}/>
          ))
        }
      </div>
  
    </div>
  )
}

export default Home
