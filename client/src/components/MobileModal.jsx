import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';

export default function MobileModal({toggleMobileMenu}) {
  return (
    <div id={style.mobileModal}>
      <div id={style.miniHeader}>
        <Link to='/' id={style.siteLogo} onClick={toggleMobileMenu}>StoryTime</Link>
        <div id={style.mobileMenuBtn} onClick={toggleMobileMenu}>
          <span className={style.hamburger}></span>
          <span className={style.hamburger}></span>
          <span className={style.hamburger}></span>
        </div>
      </div>
      <nav id={style.mobileNav}>
        <Link to='/' className={style.mobileLinks} onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to='/create' className={style.mobileLinks} onClick={toggleMobileMenu}>
          + Create
        </Link>
        <Link to='/login' id={style.mobileLoginBtn} onClick={toggleMobileMenu}>
          Login
        </Link>
      </nav>
    </div>
  );
}
