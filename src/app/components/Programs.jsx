import React from 'react';
import styles from '@/app/styles/programms.module.css';
import Card from '../components/Card';

function Programs() {
  return (
    <section
      className={styles.contenedor}
      id="programs"
      style={{
        background:
          'linear-gradient(rgba(0, 1, 3, 0.555), rgba(0, 0, 0, 0.808)), url(images/gym.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className={styles.title}>PROGRAMAS</h1>
      <div className={styles.cards}>
        <Card
          titulo={'MUSCULACIÓN'}
          texto={
            'Potencia tu fuerza con nuestro programa de musculación. Instructores expertos y equipos de calidad te guiarán hacia tus metas, asegurando resultados efectivos en un ambiente propicio para tu rendimiento óptimo.'
          }
        />
        <Card
          titulo={'POWERLIFTING'}
          texto={
            'Un experimentado instructor de powerlifting es esencial. Su conocimiento especializado guía la técnica precisa, proporciona programas adaptados y motiva para lograr objetivos de fuerza de manera segura y efectiva.'
          }
        />
        <Card
          titulo={'CALISTENIA'}
          texto={
            'Un instructor experto en calistenia es esencial para el progreso seguro y eficaz. Ofrecen la guía adecuada para dominar técnicas, diseñan rutinas personalizadas y motivan, permitiendo el desarrollo integral del cuerpo.'
          }
        />
        <Card
          titulo={'FUERZA'}
          texto={
            'Nuestro programa de fuerza brinda una metodología integral, optimizando entrenamientos para potenciar el rendimiento. Con enfoque en técnicas seguras, personalización, y progresión constante, garantizamos resultados efectivos y sostenibles.'
          }
        />
        <Card
          titulo={'CROSSFIT'}
          texto={
            'Nuestro programa de CrossFit ofrece diversidad, intensidad y comunidad. Guiados por entrenadores capacitados, combinamos entrenamientos funcionales y variados para potenciar fuerza, resistencia y agilidad, fomentando resultados holísticos y un sentido de pertenencia.'
          }
        />
        <Card
          titulo={'PROGRAMACION PARA BOXES'}
          texto={
            'Nuestro programa para boxes proporciona no solo instructores altamente capacitados, sino también una gama completa de maquinaria especializada. Garantizamos una experiencia integral para gimnasios, con profesionales expertos y equipos de calidad, asegurando el éxito del negocio.'
          }
        />
      </div>
    </section>
  );
}

export default Programs;
