import React, { useEffect, useState } from 'react'
import "./Todo.css";
import ListTask from './ListTask';
import AddTask from './AddTask';


const ToDo = () => {
  const[tasks,setTask] = useState([]);

  useEffect(()=>{
    document.title =`you have ${tasks.length} pending task(s)`
  })

  const addTask =(title) =>{
    const newTask = [...tasks,{title}]
    setTask(newTask);
  }

  const removeTask =(index)=>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTask(newTask)

  }
  return (
    <>
          <div className='todo_conatiner'>
                <div className='header'>To-Do</div>
                <div className='add_task'><AddTask addTask={addTask} />
                </div>
                <div className='task_list'> 
                {tasks.map((task,index) =>(
                  <ListTask task ={task}   removeTask={removeTask}  index ={index} key={index}/>
                 


                ))}
                
                </div>
          </div>
       
    </>
  )
}

export default ToDo