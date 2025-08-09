import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <span className={styles.skill}>
      {src && <img src={src} alt="Checkmark icon" style={{ width: '16px', marginRight: '4px' }} />}
      <span>{skill}</span>
    </span>
  );
}

export default SkillList;