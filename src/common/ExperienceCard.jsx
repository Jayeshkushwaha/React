import React from 'react';
import styles from '../sections/Experience/ExperienceStyles.module.css';

function ExperienceCard({ link, h3, h2, p, skills = [] }) {
  return (
    <article className={styles.experienceCard}>
      <div className={styles.timelineDot} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.experienceHeader}>
          <div className={styles.companyInfo}>
            <h3>{h3}</h3>
          </div>
          <h2>{h2}</h2>
        </div>
        <p>{p}</p>
        {skills.length > 0 && (
          <div className={styles.experienceSkills}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>{skill}</span>
            ))}
          </div>
        )}
      </a>
    </article>
  );
}

export default ExperienceCard;