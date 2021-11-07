import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
   
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const { signup} = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e) {
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError('Passwords do not match')
      }

      try {
         setError('')
         setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value)
         history.push("/todoapp")
      }
      catch {
         setError('Failed to create an account')
      }
      setLoading(false)
   }

   return (
      <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    {error && <alert className = "bg-red-200 text-center text-xl ">{error}</alert> }
                    <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        ref={emailRef}
                        />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        ref={passwordRef}
                        />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        ref={passwordConfirmRef}
                        />

                    <button disabled={loading}
                        type="submit"
                        class="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-500 focus:outline-none my-1"
                    >Create Account</button>

                    </form>
                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        <Link to="/login">Log In</Link>
                    </a>.
                </div>
            </div>
        </div>
   )
}
