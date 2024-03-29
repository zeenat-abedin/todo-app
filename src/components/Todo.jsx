import React from 'react'

function Todo() {
    return (
    <div className='todo-container'>
    <div className='header'>
      TODO ITEMS
    </div>
            <div className="tasks"></div>
            <div className="create-task">
                <input type="text" placeholder="Enter Task Here..." id="newTask"/>
            </div>
    </div>
  )
}

export default Todo
