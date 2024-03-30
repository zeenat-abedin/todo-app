import React from 'react'

function Task({task,completed}) {
  return (
      <div className='task' style={{ textDecoration: completed ? "line-through" : "" }}>
      {task.title}
    </div>
  )
}

export default Task
