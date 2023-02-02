import React from 'react';
import style from '../styles/HowtoUse.module.css';
import ideaIcon from '../images/idea-icon.png';
import timeIcon from '../images/time-icon.png';
import bookIcon from '../images/book-icon.png';

export default function HowtoUse() {
  return (
    <section>
      <h2 id={style.howtoTitle}>How does it work?</h2>
      <div id={style.howtoInfoContainer}>
        <div className={style.howtoCard}>
          <img className={style.howtoImg} src={ideaIcon} alt='' />
          <p></p>
        </div>
        <div className={style.howtoCard}>
          <img className={style.howtoImg} src={timeIcon} alt='' />
          <p></p>
        </div>
        <div className={style.howtoCard}>
          <img className={style.howtoImg} src={bookIcon} alt='' />
          <p></p>
        </div>
      </div>
    </section>
  );
}
