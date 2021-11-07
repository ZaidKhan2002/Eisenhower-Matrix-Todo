import React from "react";

function Form3({ setInputText3, todos3, setTodos3, inputText3 }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText3(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos3([
            ...todos3, {text:inputText3, completed: false, id: Math.random() * 1000}
        ]);
        setInputText3("");
    }

    return (
        <form>
      <input value={inputText3} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form3
