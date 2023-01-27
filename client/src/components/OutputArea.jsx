import React from 'react'
import style from '../styles/OutputArea.module.css'
export default function OutputArea({title, description}) {
  return (
    <div id={style.outputContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img></img>
      <p>start</p>
      <p>body</p>
      <p>end</p>
      <button>Download</button>
    </div>
  )
}
