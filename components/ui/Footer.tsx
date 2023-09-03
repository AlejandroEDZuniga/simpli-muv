import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column1}>
        <h2>SimpliMuv</h2>
      </div>
      <div className={styles.middleColumn}>
        <h3>Bykes</h3>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div className={styles.middleColumn}>
        <h3>Accessories</h3>
        <ul>
          <li>Equipaje</li>
          <li>Carrocería</li>
          <li>Asientos</li>
          <li>Protección</li>
          <li>Controles</li>
        </ul>
      </div>
      <div className={styles.middleColumn}>
        <h3>Apparel</h3>
        <ul>
          <li>Lifestyle accessory</li>
          <li>Merchandising</li>
          <li>Riding essentials</li>
          <li>Lifestyle apparel</li>
          <li>Riding jackets</li>
        </ul>
      </div>
      <div className={styles.column}>
      </div>
    </footer>
  );
};

export default Footer;
