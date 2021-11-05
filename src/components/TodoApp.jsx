import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import TodoList1 from './TodoList1'
import TodoList2 from './TodoList2';
import TodoList3 from './TodoList3';
import TodoList4 from './TodoList4';

function TodoApp() {

    const [inputText1, setInputText1] = useState("");
    const [todos1, setTodos1] = useState([]);

    const [inputText2, setInputText2] = useState("");
    const [todos2, setTodos2] = useState([]);

    const [inputText3, setInputText3] = useState("");
    const [todos3, setTodos3] = useState([]);

    const [inputText4, setInputText4] = useState("");
    const [todos4, setTodos4] = useState([]);

    return (
        <>
        <div className="flex justify-center items-center h-screen bg-red-50">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="bg-indigo-200 h-64 w-64 rounded-tl-xl rounded-br-xl overflow-y-auto">
                <h3 className="text-center text-xl text-gray-600">Important & Urgent</h3>
                <p className="text-center text-sm">✅ Do</p>
                <div className="ml-8 mt-2">
                <Form1 inputText1={inputText1} todos1={todos1} setTodos1={setTodos1} setInputText1={setInputText1}/>
                </div>
                <TodoList1 setTodos1={setTodos1} todos1={todos1} />
            </div>
            <div className="bg-green-200 h-64 w-64 rounded-tl-xl rounded-br-xl overflow-y-auto">
                <h3 className="text-center text-xl text-gray-600">Not Important & Urgent</h3>
                <p className="text-center text-sm">🤝 Delegate</p>
                <div className="ml-8 mt-2">
                <Form2 inputText2={inputText2} todos2={todos2} setTodos2={setTodos2} setInputText2={setInputText2}/>
                </div>
                <TodoList2 setTodos2={setTodos2} todos2={todos2} />
            </div>
            <div className="bg-yellow-100 h-64 w-64 rounded-tl-xl rounded-br-xl overflow-y-auto">
                <h3 className="text-center text-xl text-gray-600">Important & Not Urgent</h3>
                <p className="text-center text-sm">⏳ Schedule</p>
                <div className="ml-8 mt-2">
                <Form3 inputText3={inputText3} todos3={todos3} setTodos3={setTodos3} setInputText3={setInputText3}/>
                </div>
                <TodoList3 setTodos3={setTodos3} todos3={todos3} />
            </div>
            <div className="bg-purple-200 h-64 w-64 rounded-tl-xl rounded-br-xl overflow-y-auto">
                <h3 className="text-center text-xl text-gray-600">Not Important & Not Urgent</h3>
                <p className="text-center text-sm">❌ Delete</p>
                <div className="ml-8 mt-2">
                <Form4 inputText4={inputText4} todos4={todos4} setTodos4={setTodos4} setInputText4={setInputText4}/>
                </div>
                <TodoList4 setTodos4={setTodos4} todos4={todos4} />
            </div>
            </div>
        </div>
        </>
    )
}

export default TodoApp
