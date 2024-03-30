import  { useState } from 'react'
import Task from './Task'

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Buying a pizza",
      completed: false
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: true
    }
  ])

    return (
    <div className='todo-container'>
    <div className='header'>
      TODO ITEMS
    </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task task={task} key={task.title} index={index} />
          ))}
        </div>
        <div className="create-task">
            <input type="text" placeholder="Enter Task Here..." id="newTask"/>
        </div>
    </div>
  )
}

export default Todo
