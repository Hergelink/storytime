import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import stories from '../context/exampleStories';
import style from '../styles/SingleStory.module.css';

export default function SingleStory() {
  const { id } = useParams();
  const [story, setStory] = useState();

  const param = id;

  const currentStory = stories.filter((story) => story.id == param);

  return (
    <main className='single'>
      {currentStory.map((story, key) => {
        return (
          <>
            <h1 key={story.id} id={style.title}>
              {story.title}
            </h1>
            <img src={story.photo} alt={story.title} id={style.image} />
            <p id={style.story}>{story.story}</p>
          </>
        );
      })}
    </main>
  );
}
