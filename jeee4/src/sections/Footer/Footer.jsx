import React from 'react'
import styles from './FooterStyles.module.css'
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <h1 className={styles.footer__title}>
          Building a better web for <span className={styles.highlight_color_green}>tomorrow</span>, starting with <span className={styles.highlight_color_yellow}>today</span>’s code.
        </h1>

        <ul className={styles.footer__list}>
          <li>
            <Link to="about" smooth={true}
                duration={500} className={styles.footer__link}>
              About
            </Link>
            <Link to="skills" smooth={true}
                duration={500} className={styles.footer__link}>
              Skills
            </Link>
            <Link to="portfolio" smooth={true}
                duration={500} className={styles.footer__link}>
              Projects
            </Link>
          </li>
        </ul>

        <div className={styles.footer__social}>
          <a href="https://www.facebook.com/jerald.labalan.5" 
          className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-facebook'></i>
          </a>

          <a href="https://www.linkedin.com/in/jerald-labalan-91b320173/"
            className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-linkedin'></i>
          </a>

          <a href="https://github.com/jeraldlabalan"
            className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-github'></i>
          </a>
        </div>

        <span className={styles.footer__copy}>
          &#169; Jerald Labalan. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer