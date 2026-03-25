'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Plans.module.css';

export default function Plans() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const plans = [
    {
      name: 'Básico',
      price: '$10000',
      features: 'Rutina general + seguimiento mensual',
    },
    {
      name: 'Pro',
      price: '$25000',
      features: 'Rutina personalizada + seguimiento semanal',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$40000',
      features: 'Rutina personalizada + seguimiento semanal',
    },
  ];

  const handleBuy = (planName) => {
    const phone = '3416178059';
    const message = `Hola! 👋 Me comunico desde la página web. Me interesa el plan ${planName}. ¿Me das más info?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Lógica de Scroll y Detección de Índice
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % plans.length;
      container.scrollTo({
        left: container.offsetWidth * nextIndex,
        behavior: 'smooth',
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, plans.length]);

  return (
    <motion.section
      className={styles.section}
      id="planes"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>Planes</h2>
      <p className={styles.subtitle}>
        Elegí el plan que mejor se adapte a tu objetivo
      </p>

      <div ref={scrollRef} className={styles.grid}>
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
          >
            <div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.price}>
                {plan.price}
                <span className={styles.perMonth}>/mes</span>
              </p>
              <p className={styles.features}>{plan.features}</p>
            </div>

            <button
              type="button"
              className={styles.button}
              onClick={() => handleBuy(plan.name)}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {plans.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}
          ></span>
        ))}
      </div>
    </motion.section>
  );
}
