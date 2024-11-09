import React, { useEffect } from 'react';
import styles from './ScrollUpStyles.module.css';
import { Link } from 'react-scroll';

function ScrollUp({ setActiveNav }) {
  useEffect(() => {
    const scrollUp = document.querySelector(`.${styles.scrollup}`);

    const handleScroll = () => {
      if (window.scrollY >= 560) {
        scrollUp.classList.add(styles.show_scroll);
      } else {
        scrollUp.classList.remove(styles.show_scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setActiveNav('#home');  // Keep this to update the active navigation
  };

  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      onClick={handleClick} 
      className={styles.scrollup}
    >
      <i className={`${styles.scrollup__icon} uil uil-arrow-up`}></i>
    </Link>
  );
}

export default ScrollUp;
