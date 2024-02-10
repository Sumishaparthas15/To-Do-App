import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const[value,setvalue] =useState("");

  const addItem = () =>{
    addTask(value);
    setvalue("");
  };

  return (
    <>
      <div className='input_container'>
        <input type='text' className='input' placeholder='Add a new Task' value={value} onChange={(e) =>{
          setvalue(e.target.value);
        }}/>
        <button onClick={addItem} className='addButton'>ADD</button>
      </div>
    </>
  )
}

export default AddTask