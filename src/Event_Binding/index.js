import React,{useState} from 'react'

export default function Event_Binding() {

const [count,setCount]=useState(0)

const handleIncriment=()=>{
    setCount(count+1); 
}
const handleDecriment=()=>{
    setCount(count-1);
}
const reset=()=>{
    setCount(0)
}

  return (
    <div>
        <p style={{color:'#ff0000'}}>Count: {count}</p>
  
        <button onClick={handleIncriment} disabled={count===5?true:false}>+</button>
        <button onClick={handleDecriment}disabled={count===-5?true:false} >-</button>
        <button onClick={reset}>0</button>
    </div>
  )
}
