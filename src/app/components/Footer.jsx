import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '@/app/styles/footer.module.css';
import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <a href="" target="_blank" className="Icon">
            <FaWhatsapp />
          </a>
          <a href="" target="_blank" className="Icon">
            <FaInstagram />
          </a>
          <a href="" target="_blank" className="Icon">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className={styles.derechos}>
        <small>
          &copy; 2024 <b>Athletic Programmer</b> -Todos los Derechos Reservados.
          <br />
          Desarrollado por{' '}
          <a
            href="https://www.linkedin.com/in/facundo-quinteros-125051232"
            target="_blank"
            className={styles.link}
          >
            Facundo Quinteros
          </a>{' '}
        </small>
      </div>
    </footer>
  );
}
