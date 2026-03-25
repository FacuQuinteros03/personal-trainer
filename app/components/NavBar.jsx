'use client';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        <Image src="/images/logoVT.png" alt="logo" width={40} height={40} />
        VANGUARD TRAINING
      </a>

      <nav className={`${styles.nav} ${open ? styles.active : ''}`}>
        <ul className={styles.list}>
          <li>
            <a href="#inicio" className={styles.link}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className={styles.link}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#programs" className={styles.link}>
              Programas
            </a>
          </li>
          <li>
            <a href="#planes" className={styles.link}>
              Planes
            </a>
          </li>

          <li>
            <a href="#testimonios" className={styles.link}>
              Testimonios
            </a>
          </li>

          <li>
            <a href="#contacto" className={styles.link}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.socials}>
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

      <div className={styles.menuButton} onClick={() => setOpen(!open)}>
        <FaBars />
      </div>
    </header>
  );
}
