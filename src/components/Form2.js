
import React from 'react'

function Form2({ setInputText2, todos2, setTodos2, inputText2 }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText2(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos2([
            ...todos2, {text:inputText2, completed: false, id: Math.random() * 1000}
        ]);
        setInputText2("");
    }

    return (
        <form>
      <input value={inputText2} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form2
