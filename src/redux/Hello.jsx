import React, { useState } from 'react'


const Hello = () => {
    const [data,setData]=useState("")
    function handle(e){
        setData(e.target.value);
    }
  return (
    <div>
        <h1>{data}</h1>
      <input type="text" 
      onChange={handle} />
      <button onClick={()=>{handle();}}>Submit</button>

    </div>
  )
}

export default Hello
