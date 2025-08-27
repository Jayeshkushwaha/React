import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ skills }) {
  return (
    <ul className={styles.skillList}>
      {skills.map((skill, index) => (
        <li key={index} className={styles.skillItem}>
          <span className={styles.skillName}>{skill}</span>
        </li>
      ))}
    </ul>
  );
}

export default SkillList;