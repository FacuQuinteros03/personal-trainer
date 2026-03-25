'use client';
import styles from '../app/styles/contact.module.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus('Mensaje enviado exitosamente!');
        e.target.reset(); // Limpiar el form
      })
      .catch(() => {
        setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      });
  };
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.title}>Empezá tu transformación hoy</h2>

          <p className={styles.subtitle}>
            Contactanos para recibir un plan personalizado y llevar tu
            rendimiento al siguiente nivel.
          </p>

          <div className={styles.socials}>
            <a href="#">
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

        {/* RIGHT */}
        <form className={styles.form} onSubmit={sendEmail}>
          <input
            name="from_name"
            placeholder="Nombre"
            className={styles.input}
            required
          />
          <input
            name="from_email"
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Teléfono (opcional)"
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="4"
            className={styles.input}
            required
          />

          <button type="submit" className={styles.button}>
            Enviar mensaje
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
