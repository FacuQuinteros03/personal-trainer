'use client';
import {
  Dumbbell,
  Zap,
  Target,
  Activity,
  Flame,
  ClipboardList,
} from 'lucide-react';
import styles from '../app/styles/programms.module.css';

const icons = {
  Musculación: <Dumbbell size={32} />,
  Powerlifting: <Zap size={32} />,
  Calistenia: <Activity size={32} />,
  Fuerza: <Target size={32} />,
  Crossfit: <Flame size={32} />,
  Programación: <ClipboardList size={32} />,
};

export default function Card({ titulo, texto, visible, index }) {
  return (
    <div
      className={`${styles.card} ${visible ? styles.cardAnimVisible : styles.cardAnim}`}
      style={{ transitionDelay: `${index * 0.1}s` }} // Inline delay para mayor control
    >
      <div className={styles.iconWrapper}>
        {icons[titulo] || <Dumbbell size={32} />}
      </div>
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <div className={styles.cardGlow} />
    </div>
  );
}
