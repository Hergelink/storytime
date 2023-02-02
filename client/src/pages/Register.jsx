import React from 'react';
import style from '../styles/LoginRegister.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className={style.auth}>
      <h1 id={style.registerTitle}>Register</h1>
      <form id={style.registerForm}>
        <input className={style.registerInput} required type='text' placeholder='Username' />
        <input className={style.registerInput} required type='email' placeholder='Email' />
        <input className={style.registerInput} required type='password' placeholder='Password' />
        <button id={style.registerButton}>Register</button>
        <p id={style.errorP}>This is an error!</p>
        <span id={style.registerSpan}>
          Do you have an account? <Link to='/login' id={style.registerA}>Login</Link>
        </span>
      </form>
    </div>
  );
}
