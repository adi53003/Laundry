import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/getUser', { username, password })
      .then(result => {
        setUser(result.data); // Assuming result.data contains the user info
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form className='signin' onSubmit={submitHandler}>
        <input
          placeholder='Username'
          type='text'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
}
