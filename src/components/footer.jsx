import React from "react";
import styles from "../styles/footer.module.css";

function Footer({ className = "" }) {
  return (
    <nav className={className}>
      <footer className={`${styles.footer} ${className}`}>
        <div className={styles.footerInner}>
          <div className={styles.iconRow}>
            <div className={styles.iconWrapper}>
              <a href="mailto:celebremosmdz@gmail.com" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt="Email"
                  src="/img/email-icons-1@3x.png"
                />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a href="https://www.facebook.com/profile.php?id=100068287325442" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt="Facebook"
                  src="/img/face-media-icons-1@3x.png"
                />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a href="https://www.instagram.com/cr_alameda" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt="Instagram"
                  src="/img/insta-media-icons-1@3x.png"
                />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a href="https://wa.me/2613070449" target="_blank" rel="noopener noreferrer">
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt="WhatsApp"
                  src="/img/whatsApp-icons-1@3x.png" // Asegúrate de tener esta imagen
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerText}>
          <span>© Copyright 2024 </span>
          <a
            className={styles.link}
            href="https://alameda.ar/celebremos"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.celebremosalameda.com
          </a>
          <span> - Todos los derechos reservados</span>
        </div>
      </footer>
    </nav>
  );
}

export default Footer;
