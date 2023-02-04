import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div id={style.wrapper}>
        <div className={style.footerContainers}>
          <Link to='/' id={style.footerLogo} translate='no'>
            StoryTime&trade;
          </Link>
          <p>Explore infinite new worlds</p>
        </div>
        <div className={style.footerContainers}>
          <h3 className={style.footerTitles}>Links</h3>
          <div id={style.footerLinksContainer}>
          <Link to='/' className={style.footerLinks}>
            Home
          </Link>
          <Link to='/create' className={style.footerLinks}>
            + Create
          </Link>
          <Link to='/login' className={style.footerLinks}>
            Login
          </Link>
          </div>
        </div>
      </div>
      <p id={style.devP}>
        Made by
        <a
          href='https://github.com/Hergelink'
          target='_blank'
          id={style.devA}
          translate='no'
        >
          Hergelink
        </a>
      </p>
    </footer>
  );
}
