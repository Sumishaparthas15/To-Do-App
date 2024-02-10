import React from 'react'

const ListTask = ({task,index,removeTask}) => {
  return (
    <>
        <div className='list_tasks'>
            {task.title}
            <button onClick={()=>{removeTask(index)}} className='delete_button'>Delete</button>
        </div>
    </>
  )
}

export default ListTask