import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to='/' id={style.footerLogo}>Storytime&trade;</Link>
      </div>
      <div></div>
    </footer>
  );
}
