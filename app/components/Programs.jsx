'use client';
import styles from '../app/styles/programms.module.css';
import Card from './Card';
import useReveal from '../hooks/useReveal';

export default function Programs() {
  const { ref, visible } = useReveal({
    rootMargin: '0px 0px -100px 0px',
  });

  const programs = [
    {
      title: 'Musculación',
      text: 'Entrenamiento enfocado en hipertrofia y desarrollo muscular.',
    },
    {
      title: 'Powerlifting',
      text: 'Mejorá tu fuerza máxima con técnicas y progresiones específicas.',
    },
    {
      title: 'Calistenia',
      text: 'Dominá tu cuerpo con ejercicios funcionales y control total.',
    },
    {
      title: 'Fuerza',
      text: 'Optimización del rendimiento con métodos de entrenamiento avanzados.',
    },
    {
      title: 'Crossfit',
      text: 'Entrenamientos intensos que combinan fuerza y resistencia.',
    },
    {
      title: 'Programación',
      text: 'Planes personalizados para gimnasios y entrenadores.',
    },
  ];

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.show : ''}`}
      id="programs"
    >
      <h2 className={`${styles.title} ${visible ? styles.titleVisible : ''}`}>
        Programas
      </h2>

      <div className={styles.grid}>
        {programs.map((p, i) => (
          <Card key={i} titulo={p.title} texto={p.text} visible={visible} />
        ))}
      </div>
    </section>
  );
}
