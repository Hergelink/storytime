import React, { useEffect, useState } from 'react';
import StoryCard from './StoryCard';
import style from '../styles/Stories.module.css'

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
      <h1 id={style.pageTitle}>Generated Stories</h1>
      {stories.length > 0 ?
        (stories.map((story) => {
          return <StoryCard {...story} key={story._id} />;
        })) : <p id={style.zeroStoryMessage}>There are no stories</p>}
    </main>
  );
}
