import React from 'react';
import styles from '@/app/styles/inicio.module.css';

function Home() {
  return (
    <section
      className={styles.contenedor}
      id="inicio"
      style={{
        background:
          'linear-gradient(rgba(0, 1, 3, 0.555), rgba(0, 0, 0, 0.808)), url(images/fondoSoga.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.contenedorTitle}>
        <h1 className={styles.title}>ATHLETIC PROGRAMMER</h1>
        <h2 className={styles.subtitle}>Entrena de la mejor manera</h2>
        <a href="#about">
          <button className={styles.btn69}>Conoce más</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
