import React from 'react';
import styles from './WorkStyles.module.css';

const WorkItems = ({ item }) => {
  return (
    <div className={styles.work__card} key={item.id}>
      <img src={item.image} alt="This is the work preview" className={styles.work__img} />
      <h3 className={styles.work__title}>{item.title}</h3>
      <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className={styles.work__button}>
        Demo | Documentation
        <i className={`${styles.work__button_icon} bx bx-right-arrow-alt`}></i>
      </a>
    </div>
  );
};

export default WorkItems;
