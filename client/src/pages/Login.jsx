import React, { useState } from 'react'
import style from '../styles/LoginRegister.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={style.auth}>
      <h1 id={style.loginTitle}>Login</h1>
      <form id={style.loginForm}>
        <input className={style.loginInput} required type="text" placeholder='Username'/>
        <input className={style.loginInput} required type="password"  placeholder='Password'/>
        <button id={style.loginButton}>Login</button>
        <p id={style.errorP}>This is an error!</p>
        <span id={style.loginSpan}>Don't you have an account? <Link to='/register' id={style.loginA}>Register</Link></span>
      </form>
    </div>
  )
}
