import React from 'react';
import style from '../styles/LoginRegister.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className={style.auth}>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Username' />
        <input required type='email' placeholder='Email' />
        <input required type='password' placeholder='Password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
}
