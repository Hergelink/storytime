import React from 'react'
import style from '../styles/OutputArea.module.css'
export default function OutputArea({data}) {
  return (
    <div id={style.outputContainer}>
      {data}
    </div>
  )
}
