import React from 'react'
import { Item } from '../data/Item'
import "./home.css"
import Itemdisplay from '../component/Itemdisplay'
const Home = () => {

  return (
    <div>
      <h1>Home page </h1>
      <div className='Item_image'>
        {
          Item.map(Item=>(
         <Itemdisplay key={Item.id} image={Item.imgUrl} price={Item.price} item={Item}/>
          ))
        }
      </div>
  
    </div>
  )
}

export default Home
