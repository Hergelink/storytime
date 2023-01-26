import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <Link to='/' id={style.siteLogo}>
        StoryTime Ai
      </Link>
      <Link to='/create' id={style.createBtn}>
        + Create
      </Link>
    </header>
  );
}
