import React, { FC } from 'react';
import styles from './thanks.module.css';

interface Props{
    onGoHome: ()=> void
}

const ThankYou: FC<Props>  = ({ onGoHome }) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <div className={styles.checkmark}></div>
      </div>
      <h1>Thanks You !!</h1>
      <button className={styles.button} onClick={onGoHome}>Go to Home</button>
    </div>
  );
}

export default ThankYou;
