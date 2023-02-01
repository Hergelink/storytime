import React from 'react';
import style from '../styles/OutputArea.module.css';

export default function OutputArea({ title, description, storyBody, image, storyEnd}) {
  console.log(storyEnd);
  return (
    <>
      {image.length > 1 ? (
        <div id={style.outputContainer}>
          <img
            src={image}
            id={style.storyImage}
            alt={`An image description of ${title}`}
          ></img>
          <h2 id={style.storyTitle}>{title}</h2>
          <p id={style.storyDescription}>{description}</p>
          <p id={style.wholeStory}>{storyBody}</p>
          <p id={style.storyEnd}>{storyEnd}</p>
          <button id={style.downloadBtn}>Download</button>
        </div>
      ) : (
        <div id={style.preOutputContainer}>
          <h2>Your story will appear here:</h2>
        </div>
      )}
    </>
  );
}
