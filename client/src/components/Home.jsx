import {Link} from 'react-router-dom';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <main>
      <h1>Explore infinite new worlds</h1>
      <p className={style.infoContent}>
        Welcome to Storytime, the AI-powered story generator for all ages.
        Whether you're looking for a bedtime story for your child, or a quick
        escape for yourself, Storytime has something for everyone.
      </p>
      <p className={style.infoContent}>
        Our AI-powered technology creates unique stories tailored to your
        interests, ensuring you'll never read the same story twice. With a wide
        variety of themes and characters to choose from, you can explore new
        worlds and meet exciting new characters every time you read.
      </p>
      <Link to='/create' id={style.createStoryBtn}>+ Create new Story</Link>
    </main>
  );
}
