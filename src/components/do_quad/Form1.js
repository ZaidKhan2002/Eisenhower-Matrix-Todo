
import React from 'react'

function Form1({ setInputText1, todos1, setTodos1, inputText1 }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText1(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos1([
            ...todos1, {text:inputText1, completed: false, id: Math.random() * 1000}
        ]);
        setInputText1("");
    }

    return (
        <form>
      <input value={inputText1} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form1
