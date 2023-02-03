import React from 'react';
import {Link} from 'react-router-dom'
import style from '../styles/ExampleStories.module.css';
import octopusImg from '../images/octopus-story.png';

export default function ExampleStories() {
  return (
    <section>
      <h2 id={style.exampleTitle}>Example Stories</h2>
      <div className={style.storyContainer}>
        <div className={style.storyInfo}>
          <h3>The Unbreakable Bond Between a Submarine and a Giant Octopus"</h3>
          <p>
            The deep blue sea was a mysterious place, but none were more
            mysterious than the bond between the submarine and the giant
            octopus. It was an unbreakable bond that no one could explain, but
            everyone could see. For years the submarine had been exploring the
            depths of the ocean, but it wasn't until the giant octopus appeared
            that the submarine found a true companion. The two were inseparable,
            and together they explored the depths of the ocean, uncovering
            secrets no one had ever seen before.
          </p>
          <Link to='/' className={style.storyLinks}>Read Full Story...</Link>
        </div>
        <div className={style.imageContainer}>
          <img src={octopusImg} alt='an octopus and a submarine' className={style.exampleImage}/>
        </div>
      </div>
    </section>
  );
}
