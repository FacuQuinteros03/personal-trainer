import React from 'react';
import styles from '@/app/styles/card.module.css';

function Card({ titulo, texto }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{titulo}</h1>
      <p className={styles.p}>{texto}</p>
      <button className={styles.btn}>
        <a href="" target="blank" className={styles.link}>
          Consultar
        </a>
      </button>
    </div>
  );
}

export default Card;
