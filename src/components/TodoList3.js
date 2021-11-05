import React from 'react'
import Todo from './Todo'

const TodoList3 = ({ todos3, setTodos3 }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos3.map(todo => (
                  <Todo setTodos={setTodos3} todos={todos3} key={todo.id} todo={todo} text={todo.text}/> 
               ))}
            </ul>
        </div>
    )
}

export default TodoList3
