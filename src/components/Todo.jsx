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

  function handleCompleteTask(index) {
    let updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);   
  }

  function handleRemoveTask(index) {
    let filteredTasks = [...tasks];
    filteredTasks.splice(index, 1);
    setTasks(filteredTasks);  
  }

    return (
    <div className='todo-container'>
    <div className='header'>
      TODO ITEMS
    </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task task={task} key={task.title} index={index} completed={task.completed} onTaskComplete={handleCompleteTask} onTaskRemove={handleRemoveTask} />
          ))}
        </div>
        <div className="create-task">
          <CreateTask onAddTask={handleAddTask} />
        </div>
    </div>
  )
}

export default Todo
