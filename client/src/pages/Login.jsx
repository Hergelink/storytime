import React from 'react'
import style from '../styles/LoginRegister.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={style.auth}>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Username'/>
        <input required type="password"  placeholder='Password'/>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}
