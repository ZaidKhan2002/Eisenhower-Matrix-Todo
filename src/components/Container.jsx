import React from 'react'
import { Link } from 'react-router-dom'

function Container() {
    return (
        <>
        <nav class="flex flex-wrap items-center justify-between p-5 bg-red-100 sticky top-0 z-50">
            <h1 className="font-serif text-3xl ml-6 text-gray-600">Eisenhower Todo</h1>
            <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-10">
                <Link to="/login">Login</Link>
            </button>
        </nav>  
        <div className="text-center text-base bg-red-50 pt-6">Learn about <a className="text-red-500" href="https://todoist.com/productivity-methods/eisenhower-matrix">"Eisenhower Matrix"</a></div>
        <div className="flex justify-center items-center h-screen bg-red-50">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="bg-indigo-200 h-64 w-64 rounded-tl-xl rounded-br-xl">
                <h3 className="text-center text-xl text-gray-600">Important & Urgent</h3>
                <p className="text-left ml-2 mt-2 text-xs">Things with clear deadlines and consequences for not taking immediate action.</p>
                <h5 className="mt-2 ml-2">Examples : </h5>
                <ul className="ml-2 mt-2 list-inside list-disc">
                    <li>Finishing a client project.</li>
                    <li>Responding to some emails.</li>
                    <li>Assignments with deadlines.</li>
                </ul>
            </div>
            <div className="bg-green-200 h-64 w-64 rounded-tl-xl rounded-br-xl">
                <h3 className="text-center text-xl text-gray-600">Not Important & Urgent</h3>
                <p className="text-left ml-2 mt-2 text-xs">Things that need to be done, but don't require your specific skills. Tasks you will spend less time with.</p>
                <h5 className="mt-2 ml-2">Examples : </h5>
                <ul className="ml-2 mt-2 list-inside list-disc">
                    <li>Uploading blog posts.</li>
                    <li>Scheduling meeting.</li>
                    <li>Running errands.</li>
                </ul>
            </div>
            <div className="bg-yellow-100 h-64 w-64 rounded-tl-xl rounded-br-xl">
                <h3 className="text-center text-xl text-gray-600">Important & Not Urgent</h3>
                <p className="text-left ml-2 mt-2 text-xs">Activities without a set deadline that bring you closer to your goals. Easy to procrastinate on</p>
                <h5 className="mt-2 ml-2">Examples : </h5>
                <ul className="ml-2 mt-2 list-inside list-disc">
                    <li>Strategic Planning.</li>
                    <li>Professional development.</li>
                    <li>Exercise.</li>
                </ul>
            </div>
            <div className="bg-purple-200 h-64 w-64 rounded-tl-xl rounded-br-xl">
                <h3 className="text-center text-xl text-gray-600">Not Important & Not Urgent</h3>
                <p className="text-left ml-2 mt-2 text-xs">Eliminate tasks that do not align with personal mission and goals. Learn to say no to them.</p>
                <h5 className="mt-2 ml-2">Examples : </h5>
                <ul className="ml-2 mt-2 list-inside list-disc">
                    <li>Parties.</li>
                    <li>Video Games.</li>
                    <li>Random Youtube Videos.</li>
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}

export default Container
