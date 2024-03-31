import  { useState } from 'react'
import Task from './Task'
import CreateTask from './CreateTask'

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

  function handleAddTask(newTitle) {
    if (newTitle === "") return;   
    let newTask = {
      title: newTitle,
      completed: false
    }
    setTasks([...tasks, newTask]);    
  }

    return (
    <div className='todo-container'>
    <div className='header'>
      TODO ITEMS
    </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task task={task} key={task.title} index={index} completed={task.completed} />
          ))}
        </div>
        <div className="create-task">
          <CreateTask onAddTask={handleAddTask} />
        </div>
    </div>
  )
}

export default Todo
