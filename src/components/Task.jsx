import React from 'react'

function Task({task,completed, onTaskComplete, onTaskRemove, index}) {
  return (
    <div className='task' style={{ textDecoration: completed ? "line-through" : "" }}>
      {task.title}
      <button onClick={() => onTaskComplete(index)}>Mark as complete</button>
      <button onClick={() => onTaskRemove(index)}>Delete task</button>
    </div>
  )
}

export default Task
