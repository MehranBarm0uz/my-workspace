import React from 'react';
import styles from './time.module.scss';

const time = () => {
  return (
    <div className={styles.bg}>
      <section className={styles.container}>
        <div className={styles.user_profile}>
          <div className={styles.user_details}>
            <img src="/TimeImages/image-jeremy.png " alt="" />
            <p>Report for</p>
            <h2>
              Jeremy <br /> Robson
            </h2>
          </div>
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
        <div className={styles.user_cards}>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-work.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-play.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-study.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-exercise.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-social.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1_svg}>
              <img src="/TimeIcons/icon-self-care.svg" alt="" />
            </div>
            <div className={styles.card1_time}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default time;
