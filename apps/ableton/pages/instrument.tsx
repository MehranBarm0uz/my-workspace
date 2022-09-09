import React from 'react';
import styles from './instrument.module.scss';

const instrument = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <ul className={styles.ul}>
            <li>Nike</li>
            <li>Adidas</li>
            <li>BMW</li>
            <li>Logo4</li>
          </ul>
          <ul className={styles.ul}>
            <li>IKEA</li>
            <li>Ford</li>
            <li>Under Armour</li>
            <li>Logo4</li>
          </ul>
          <ul className={styles.ul}>
            <li>LEGO</li>
            <li>Tornado</li>
            <li>Logo3</li>
            <li>Logo4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default instrument;
