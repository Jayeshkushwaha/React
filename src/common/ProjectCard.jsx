import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.projectCard}
      aria-label={`View ${h3} project - ${p}`}
    >
      <img 
        src={src} 
        alt={`${h3} project preview`}
        loading="lazy"
        decoding="async"
      />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
