import { Link } from 'react-router-dom';
import style from '../styles/Home.module.css';
import heroImage from '../images/hero-image.jpeg';
import HowtoUse from './HowtoUse';
export default function Home() {
  return (
    <main>
      <section id={style.heroContainer}>
        <div id={style.imageContainer}>
          <img
            id={style.heroImg}
            src={heroImage}
            alt='a bright sky with partials clouds and five air balloons'
          />
          <div id={style.vignette}></div>
        </div>
        <div id={style.infoContainer}>
          <div>
            <h1 id={style.tagline}>Explore infinite new worlds</h1>
            <p className={style.infoContent}>
              Welcome to Storytime, the AI-powered story generator for all ages.
              Whether you're looking for a bedtime story for your child, or a
              quick escape for yourself, Storytime has something for everyone.
            </p>
            <p className={style.infoContent}>
              Our AI-powered technology creates unique stories tailored to your
              interests, ensuring you'll never read the same story twice. With a
              wide variety of themes and characters to choose from, you can
              explore new worlds and meet exciting new characters every time you
              read.
            </p>
          </div>
          <Link to='/create' id={style.createStoryBtn}>
            + Create Your Story
          </Link>
        </div>
      </section>
      <HowtoUse />
    </main>
  );
}
