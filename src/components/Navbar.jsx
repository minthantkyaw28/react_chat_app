import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Reac Chat</span>
      <div className='user'>
        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        <span>Sam</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
