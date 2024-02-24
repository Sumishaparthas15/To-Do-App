import React, { useState } from 'react'
import Child from './Child'

const Excercise = () => {
    const [value,setvalue] = useState(0)
    const [time,setTime] = useState(0)
    const [isActive,setIsActive] = useState(false)


    const increment =() =>{
        setvalue(value+1)
    }
    const decrement =() =>{
        setvalue(value-1)
    }
    
    // const data = "hai smiisha"

    const start =()=>{
        setIsActive(true)
    }

    const restart = () =>{
        setIsActive(false)

    }
    const stop =()=>{
        setIsActive(false)

    }
  return (
    <>
      {/* <p>Counter is {value}</p> */}
      {/* <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>   */}
      {/* <Child  data ={data}/> */}
      {/* <button>click me </button> */}
      {/* <p>time {second}</p> */}
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={restart}>Restart</button>
      
      
    </>
  )
}

export default Excercise

