import React from 'react'

export const Cartdisplay = ({num,price,image}) => {
  return (
    <div>
   <img src={image} />
   <h1>{price}</h1>

     
    </div>
  )
};
