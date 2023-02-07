import { Link } from 'react-router-dom';
import style from '../styles/Home.module.css';
import heroImage from '../images/hero-image.jpeg';
import HowtoUse from './HowtoUse';
import ExampleStories from './ExampleStories';
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
            <h1 id={style.tagline}>Personalized stories in seconds</h1>
            <p className={style.infoContent}>
              Say goodbye to boring bedtime routines and hello to captivating,
              personalized stories crafted just for your little ones. With the
              power of AI technology, our generator creates unique and engaging
              tales in seconds, ensuring sweet dreams and happy kids every
              night. Try it now and see the magic unfold!
            </p>
          </div>
          <Link to='/create' id={style.createStoryBtn}>
            + Create Your Story
          </Link>
        </div>
      </section>
      <HowtoUse />
      <hr className={style.linebreak} />
      <ExampleStories />
    </main>
  );
}
