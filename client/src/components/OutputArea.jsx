import React from 'react';
import style from '../styles/OutputArea.module.css';
export default function OutputArea({ title, description, story, image }) {
  return (
    <div id={style.outputContainer}>
      <img src={image} id={style.storyImage}></img>
      <h2 id={style.storyTitle}>{title}</h2>
      <p id={style.storyDescription}>{description}</p>
      <p id={style.wholeStory}>{story}</p>
      <button id={style.downloadBtn}>Download</button>
    </div>
  );
}
