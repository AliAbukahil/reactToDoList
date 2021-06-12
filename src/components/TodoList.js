import React from 'react'
// import Components 

import Todo from "./Todo"

function TodoList({ todos }) {

    return (
        <div className="todo-container">
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo />
            ))}
        </ul>
            </div>

    )
}

export default TodoList
