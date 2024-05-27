import React from "react";
import styles from "../styles/footer.module.css";

function Footer({ className = "" }) {
  return (
      <nav className={className}>
          { <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.faceMediaIconsWrapper}>
            <img
              className={styles.faceMediaIcons}
              loading="lazy"
              alt=""
              src="/face-media-icons-1@2x.png"
            />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
          <img
            className={styles.instaMediaIcons}
            loading="lazy"
            alt=""
            src="/insta-media-icons-1@2x.png"
          />
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
    }
      </nav>
  );
}

export default Footer;
