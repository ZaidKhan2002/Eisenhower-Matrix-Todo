import React from 'react'
import Todo from './Todo'

const TodoList1 = ({ todos1, setTodos1 }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos1.map(todo => (
                  <Todo setTodos={setTodos1} todos={todos1} key={todo.id} todo={todo} text={todo.text}/> 
               ))}
            </ul>
        </div>
    )
}

export default TodoList1
