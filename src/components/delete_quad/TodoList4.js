import React from 'react'
import Todo from '../Todo'

const TodoList4 = ({ todos4, setTodos4 }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos4.map(todo => (
                  <Todo setTodos={setTodos4} todos={todos4} key={todo.id} todo={todo} text={todo.text}/> 
               ))}
            </ul>
        </div>
    )
}

export default TodoList4
