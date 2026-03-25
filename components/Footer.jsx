import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '../app/styles/footer.module.css';
import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {' '}
        {/* Envoltorio para centrar */}
        <div className={styles.top}>
          <h3 className={styles.brand}>VANGUARD TRAINING</h3>

          <div className={styles.icons}>
            <a
              href="https://wa.me/3416178059?text=Hola!%20%F0%9F%91%8B%20Me%20comunico%20desde%20la%20p%C3%A1gina%20web.%20%C2%BFMe%20das%20m%C3%A1s%20info%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/vanguardtraining/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <small>
            © {year} VANGUARD TRAINING — Todos los derechos reservados.
          </small>

          <p>
            Desarrollado por{' '}
            <a
              href="https://www.linkedin.com/in/facundo-quinteros-125051232"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Facundo Quinteros
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
