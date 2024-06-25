import React from 'react'
import '../index.css'

export default function Header() {
  return (
    <header className='navbar'>
        <div>
            <a href='/'>
                <img src='images/LaundryHomeLogo.jpg' className='home-logo'></img>
            </a>
        </div>
        <div className='nav-button-list'>
            <a href="/">Home</a>
            <a href="/SignIn">Sign In</a>
            <a href="/SignUp">Sign Up</a>
        </div>
    </header>
  )
}
