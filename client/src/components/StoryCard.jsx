import React from 'react';
import style from '../styles/Stories.module.css';

export default function StoryCard({ image, title, description }) {
  const editedTitle = title.replace(/"/g, '');

  const formattedImageUrl = image.replace('./server', '');

  return (
    <div className={style.storyContainer}>
      <div className={style.imageContainer}>
        <img
          src={`http://localhost:3001${formattedImageUrl}`}
          alt={`a description of ${title}`}
        />
      </div>
      <div className={style.storyText}>
        <h2>{editedTitle}</h2>
        <p className='summary'>{description}</p>
      </div>
    </div>
  );
}
