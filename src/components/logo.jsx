import React from "react";
import styles from "../styles/logo.module.css";

const Logo = ({ src, alt, className = "" }) => {
  return (
    <section className={`${styles.logo} ${className}`}>
      <img 
        className={styles.logoImg} 
        loading="lazy" 
        alt={alt} 
        src={src} 
      />
    </section>
  );
};

export default Logo;

