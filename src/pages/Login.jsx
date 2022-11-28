import React from 'react'
import Add from '../images/addAvatar.png';

const Login = () => {
  return (
    <div className='form-container'>
       <div className='form-wrapper'>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
        <form action="">
            <input type="text" placeholder='name' />
            <input type="password" placeholder='password'/>
            <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
       </div>
    </div>
  )
}

export default Login
