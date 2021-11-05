import React from 'react'
import Todo from './Todo'

const TodoList2 = ({ todos2, setTodos2 }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos2.map(todo => (
                  <Todo setTodos={setTodos2} todos={todos2} key={todo.id} todo={todo} text={todo.text}/> 
               ))}
            </ul>
        </div>
    )
}

export default TodoList2
