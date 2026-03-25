import React from 'react';
import styles from '@/app/styles/about.module.css';
import Image from 'next/image';

function About() {
  return (
    <section className={styles.contenedor} id="about">
      <h1 className={styles.title}>FILOSOFIA</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/images/peso.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>ENTRENAMIENTOS</h2>
          <p className={styles.texto}>
            Ofrecemos una amplia gama de entrenamientos diseñados para
            satisfacer diversas necesidades. Desde programas deportivos que
            mejoran el rendimiento físico hasta capacitaciones académicas y
            profesionales que potencian habilidades específicas. Nuestros
            entrenamientos fomentan la constancia, la superación de desafíos y
            la mejora continua, garantizando éxito en cualquier área.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/tareas.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>DISCIPLINA</h2>
          <p className={styles.texto}>
            La disciplina en el entrenamiento es crucial, proporcionando
            consistencia, constancia y enfoque en metas específicas. Cultiva
            hábitos positivos, fortalece la resiliencia ante desafíos y fomenta
            la mejora continua. Su presencia no solo garantiza el progreso
            personal, sino también el éxito a largo plazo en cualquier área de
            entrenamiento.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/evaluacion.png"
            width={64}
            height={64}
            className={styles.imagenes}
          />
          <h2 className={styles.subtitle}>CONSTANCIA</h2>
          <p className={styles.texto}>
            La constancia es esencial en el entrenamiento, marcando la
            diferencia entre el éxito y el estancamiento. Al mantener una rutina
            constante, se establecen hábitos positivos, se superan desafíos y se
            alcanzan metas. La constancia impulsa la mejora continua, asegurando
            resultados sostenibles y el logro de objetivos a largo plazo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
