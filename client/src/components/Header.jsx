import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';
import MobileModal from './MobileModal';

export default function Header() {
  const [menuState, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header>
      <Link to='/' id={style.siteLogo}>
        StoryTime
      </Link>
      <div id={style.mobileMenuBtn} onClick={toggleMobileMenu}>
        <span className={style.hamburger}></span>
        <span className={style.hamburger}></span>
        <span className={style.hamburger}></span>
      </div>

      {/* {menuState ? null : <div id={style.mobileModal}>link1 link 2</div>} */}
      {menuState ? null : <MobileModal toggleMobileMenu={toggleMobileMenu} />}

      <nav id={style.desktopNavContainer}>
        <Link to='/' className={style.desktopLinks}>
          Home
        </Link>
        <Link to='/create' className={style.desktopLinks}>
          + Create
        </Link>
        <Link to='/login' id={style.loginBtn}>
          Login
        </Link>
      </nav>
    </header>
  );
}
