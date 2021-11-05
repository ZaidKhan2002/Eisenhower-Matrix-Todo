import React from "react";

function Form4({ setInputText4, todos4, setTodos4, inputText4 }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText4(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos4([
            ...todos4, {text:inputText4, completed: false, id: Math.random() * 1000}
        ]);
        setInputText4("");
    }

    return (
        <form>
      <input value={inputText4} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form4
