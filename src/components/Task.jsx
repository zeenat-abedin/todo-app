import React from 'react'

function Task({task,completed}) {
  return (
    <div className='task' style={{ textDecoration: completed ? "line-through" : "" }}>
      {task.title}
      <button onClick={() => completed(task)}>{completed ? "Mark Undone" : "Mark Done"}</button>
    </div>
  )
}

export default Task
