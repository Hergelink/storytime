import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <Link to='/' id={style.siteLogo}>
        StoryTime Ai
      </Link>
      <div id={style.desktopNavContainer}>
        <Link to='/' className={style.desktopLinks}>
          Home
        </Link>
        <Link to='/create' className={style.desktopLinks}>
          + Create
        </Link>
        <Link to='/login' id={style.loginBtn}>
          Login
        </Link>
      </div>
    </header>
  );
}
