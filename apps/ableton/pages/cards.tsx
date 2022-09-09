import React from 'react';
import styles from './cards.module.scss';

import Avatar from '../public/Icons/Avatar';
const cards = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.card}>
          <div className={styles.avatar_box}>
            <div className={styles.avatar}>
              <p>LEVEL 13</p>
              <div className={styles.profile}>
                <Avatar />
              </div>
              <p>5,312 POINTS</p>
            </div>
          </div>

          <div className={styles.info_slide}>
            <h1> John Doe</h1>
          </div>

          <div className={styles.info}>
            <h1>John Doe</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar
            </p>
            <p>Mouse over the card for more info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
