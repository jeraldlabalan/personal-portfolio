import React from 'react'
import styles from './AboutStyles.module.css'

function Information() {
  return (
    <div className={`${styles.about__info} grid`}>
      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
          Experience
        </h3>
        <span className={styles.about__subtitle}>
          3 Years Coding Practice
        </span>
      </div>

      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
    
          Completed
        </h3>
        <span className={styles.about__subtitle}>
          5+ Projects
        </span>
      </div>

      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
  
          Other Hobbies
        </h3>
        <span className={styles.about__subtitle}>
          Piano
        </span>
      </div>

    </div>
  )
}

export default Information