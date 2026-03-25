'use client';
import { motion } from 'framer-motion';
import styles from '../app/styles/Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lautaro Lucero',
      text: 'En 3 meses logré mejorar mi rendimiento y ganar masa muscular. El seguimiento fue clave.',
      result: '+5kg masa muscular',
    },
    {
      name: 'Martina López',
      text: 'Nunca había sido tan constante. Los entrenamientos son claros y efectivos.',
      result: '-8kg en 2 meses',
    },
    {
      name: 'Lucas Gómez',
      text: 'La planificación es excelente. Me ayudó a mejorar fuerza y técnica.',
      result: '+30% fuerza',
    },
    {
      name: 'Sofía Martínez',
      text: 'Me encanta la variedad de ejercicios y la atención personalizada.',
      result: '-10kg en 3 meses',
    },
    {
      name: 'Federico Rossi',
      text: 'Gracias a este programa, logré superar mis límites y sentirme más fuerte que nunca.',
      result: '+15kg en press de banca',
    },
    {
      name: 'Valentina Fernández',
      text: 'Me sirvió mucho la guía nutricional, cambió mis habitos alimenticios.',
      result: '-11kg en 4 meses',
    },
  ];

  return (
    <section className={styles.section} id="testimonios">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.title}
      >
        Resultados reales
      </motion.h2>

      <div className={styles.container}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.quoteIcon}>“</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.footer}>
              <div className={styles.avatar}>{t.name.charAt(0)}</div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <span className={styles.resultTag}>{t.result}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
