import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className={styles.bg}>
      <div className={styles.page}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul>
              <div className={styles.logo}>
                <svg
                  role="img"
                  aria-labelledby="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 21"
                >
                  <title id="logo">Ableton Homepage</title>
                  <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
                </svg>
              </div>
              <Link href="#">
                <a>Live</a>
              </Link>
              <Link href="#">
                <a>Push</a>
              </Link>
              <Link href="#">
                <a>Link</a>
              </Link>
              <Link href="#">
                <a>Shop</a>
              </Link>
              <Link href="#">
                <a>Packs</a>
              </Link>
              <Link href="#">
                <a>Help</a>
              </Link>

              <li onClick={() => setShowMore(!showMore)}>
                More {showMore ? '-' : '+'}
              </li>
            </ul>
            <ul className={styles.login_buttons}>
              <Link href="#">
                <a>Try Live for free</a>
              </Link>
              <Link href="#">
                <a>Log on or register</a>
              </Link>
            </ul>
          </nav>

          <section className={showMore ? styles.nav_more : styles.hide_nav}>
            <h1>More on Abelton.com:</h1>
            <ul>
              <Link href="#">
                <a>Blog</a>
              </Link>
              <Link href="#">
                <a>Abelton for the Classroom</a>
              </Link>
              <Link href="#">
                <a>Abelton for Colleges and Universities</a>
              </Link>
              <Link href="#">
                <a>Certified Training</a>
              </Link>
              <Link href="#">
                <a>About Ableton</a>
              </Link>
              <Link href="#">
                <a>Jobs</a>
              </Link>
              <Link href="#">
                <a>Apprenticeship</a>
              </Link>
            </ul>
          </section>
        </header>
        <section className={styles.section_one}>
          <div className={styles.collage}>
            {/* <img src="/images/photo-3.jpg" alt="" />
            <img src="/images/photo-4.jpg" alt="" /> */}
            <div className={styles.img_wrapper}>
              <Image
                src={'/images/photo-3.jpg'}
                width="533.33px"
                height="400px"
              ></Image>
            </div>
            <div className={styles.img_wrapper}>
              <Image
                src={'/images/photo-4.jpg'}
                width="533.33px"
                height="400px"
              ></Image>
            </div>
          </div>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/photo-5.jpg'}
              width="666px"
              height="666px"
            ></Image>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
