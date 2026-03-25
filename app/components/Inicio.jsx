import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <h1 className={styles.title}>VANGUARD TRAINING</h1>
        <p className={styles.subtitle}>
          Entrená de forma inteligente y llevá tu rendimiento al siguiente nivel
        </p>

        <a href="#about" className={styles.button}>
          Conocer más
        </a>
      </div>
    </section>
  );
}
