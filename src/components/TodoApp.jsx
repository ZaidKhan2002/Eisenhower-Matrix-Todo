import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Form1 from './do_quad/Form1'
import Form2 from './delegate_quad/Form2';
import Form3 from './schedule_quad/Form3';
import Form4 from './delete_quad/Form4';
import TodoList1 from './do_quad/TodoList1'
import TodoList2 from './delegate_quad/TodoList2';
import TodoList3 from './schedule_quad/TodoList3';
import TodoList4 from './delete_quad/TodoList4';

const getLocalItems1 = () => {
    let list1 = localStorage.getItem('lists1');

    if(list1) {
        return JSON.parse(localStorage.getItem('lists1'))
    }else {
        return []
    }
}

const getLocalItems2 = () => {
    let list2 = localStorage.getItem('lists2');

    if(list2) {
        return JSON.parse(localStorage.getItem('lists2'))
    }else {
        return []
    }
}

const getLocalItems3 = () => {
    let list3 = localStorage.getItem('lists3');

    if(list3) {
        return JSON.parse(localStorage.getItem('lists3'))
    }else {
        return []
    }
}

const getLocalItems4 = () => {
    let list4 = localStorage.getItem('lists4');

    if(list4) {
        return JSON.parse(localStorage.getItem('lists4'))
    }else {
        return []
    }
}

function TodoApp() {

    const [inputText1, setInputText1] = useState("");
    const [todos1, setTodos1] = useState(getLocalItems1());

    const [inputText2, setInputText2] = useState("");
    const [todos2, setTodos2] = useState(getLocalItems2());

    const [inputText3, setInputText3] = useState("");
    const [todos3, setTodos3] = useState(getLocalItems3());

    const [inputText4, setInputText4] = useState("");
    const [todos4, setTodos4] = useState(getLocalItems4());

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }

    useEffect(() => {
        localStorage.setItem('lists1',JSON.stringify(todos1))
    }, [todos1])

    useEffect(() => {
        localStorage.setItem('lists2',JSON.stringify(todos2))
    }, [todos2])

    useEffect(() => {
        localStorage.setItem('lists3',JSON.stringify(todos3))
    }, [todos3])

    useEffect(() => {
        localStorage.setItem('lists4',JSON.stringify(todos4))
    }, [todos4])

    return (
        <>
         <nav class="flex flex-wrap items-center justify-between p-5 bg-red-100 sticky top-0 z-50">
            <h1 className="font-serif text-3xl ml-6 text-gray-600">Eisenhower Todo</h1>
            {error && <p>{error}</p>}
            <button onClick={handleLogout} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-10">
                <Link to="/">Log Out</Link>
            </button>
        </nav> 
        <h3 className="text-center text-xl bg-red-50 pt-4">Welcome: {currentUser.email}</h3>
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
