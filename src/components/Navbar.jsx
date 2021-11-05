import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav class="flex flex-wrap items-center justify-between p-5 bg-red-100 sticky top-0 z-50">
            <h1 className="font-serif text-3xl ml-6 text-gray-600">Eisenhower Todo</h1>
            <Link to="/login"><button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-10">Login</button></Link>
        </nav>  
        </>
    )
}

export default Navbar
