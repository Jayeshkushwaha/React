import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Skill indicator" className={styles.skillIcon} />
      <div className={styles.skillContent}>
        <div className={styles.skillInfo}>
          <p className={styles.skillName}>{skill}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillList;
