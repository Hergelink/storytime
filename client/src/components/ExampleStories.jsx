import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/ExampleStories.module.css';
import stories from '../context/exampleStories';

export default function ExampleStories() {
  return (
    <section>
      <h2 id={style.exampleTitle}>Example Stories</h2>
      <div id={style.storyWrapper}>
        {stories.map((story, key) => {
          return (
            <div className={style.storyContainer} key={story.id}>
              <div className={style.storyInfo}>
                <h3>{story.title}</h3>
                <p>{story.storyEntry}</p>
                <Link to={`/story/${story.id}`} className={style.storyLinks}>
                  Read Full Story
                </Link>
              </div>
              <div className={style.imageContainer}>
                <img
                  src={story.photo}
                  alt={story.title}
                  className={style.exampleImage}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}