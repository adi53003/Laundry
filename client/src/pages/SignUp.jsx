import React from 'react'
import '../index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/createUser", {username, email, password})
        .then(result => {
          console.log(result);
          navigate('/');
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
      Sign Up
      <form className='signup' onSubmit={submitHandler}>
        <input placeholder='Username' type='text' onChange={(e) => {setUsername(e.target.value)}}></input>
        <input placeholder='Email' type='email' onChange={(e) => {setEmail(e.target.value)}}></input>
        <input placeholder='Password' type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
        <button>Sign Up</button>
      </form>
    </div>
  )
}
