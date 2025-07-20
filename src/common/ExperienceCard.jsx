import React from 'react';
import styles from '../sections/Experience/ExperienceStyles.module.css';

function ExperienceCard({ h2, link, h3, p, skills = [] }) {
  // Extract company initials for logo
  const getCompanyInitials = (companyName) => {
    return companyName
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className={styles.timelineItem}>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.experienceCard}
        aria-label={`Learn more about ${h3}`}
      >
        <div className={styles.cardHeader}>
          <div className={styles.companyLogo}>
            {getCompanyInitials(h3)}
          </div>
          <div className={styles.cardContent}>
            <h3>{h3}</h3>
            <h4>{h2}</h4>
          </div>
        </div>
        <p>{p}</p>
        {skills.length > 0 && (
          <div className={styles.skillTags}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        )}
      </a>
    </div>
  );
}

export default ExperienceCard;
