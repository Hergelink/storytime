import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StoryCard from './StoryCard';
import style from '../styles/Stories.module.css';

export default function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/post').then((response) => {
      response.json().then((stories) => {
        setStories(stories);
      });
    });
  }, []);

  return (
    <main>
      <h1 id={style.pageTitle}>Latest Stories</h1>
      {stories.length > 0 ? (
        stories.map((story) => {
          return <StoryCard {...story} key={story._id} />;
        })
      ) : (
        <p id={style.zeroStoryMessage}>There are no stories</p>
      )}
      <h3 id={style.callToAction}>Don't just read,<br /> <span>create your own!</span></h3>
      <Link to='/create' id={style.linkToCreatePage}>+ Create your Story</Link>
    </main>
  );
}
