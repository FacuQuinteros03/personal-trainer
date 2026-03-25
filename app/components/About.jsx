'use client';
import styles from '../styles/about.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const items = [
    {
      src: '/images/peso.png',
      title: 'Entrenamientos',
      text: 'Programas diseñados para mejorar rendimiento físico y alcanzar objetivos.',
      delay: 0,
    },
    {
      src: '/images/tareas.png',
      title: 'Disciplina',
      text: 'La constancia y el enfoque son clave para construir hábitos sostenibles.',
      delay: 0.2,
    },
    {
      src: '/images/evaluacion.png',
      title: 'Constancia',
      text: 'El progreso real se logra manteniendo el esfuerzo en el tiempo.',
      delay: 0.4,
    },
  ];

  return (
    <section className={styles.section} id="about">
      {/* Mantenemos el blob de luz sutil en el fondo */}
      <div className={styles.blob}></div>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Filosofía
      </motion.h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            // Fade-in de entrada (al scrollear)
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            // Animación constante (Floating sutil)
            animate={{ y: [0, -6, 0] }}
            // Unificamos transiciones
            transition={{
              y: {
                duration: 5, // Más lento y sutil
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay,
              },
              // La transición de entrada (fade-in)
              opacity: { duration: 0.5, delay: i * 0.15 },
              y_scroll: { duration: 0.5, delay: i * 0.15 },
            }}
          >
            <div className={styles.iconContainer}>
              <Image
                src={item.src}
                width={60}
                height={60}
                alt={item.title}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.subtitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
