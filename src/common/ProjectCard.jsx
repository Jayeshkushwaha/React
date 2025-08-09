import React, { useState } from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';
import { motion } from 'framer-motion';

function ProjectCard({ src, link, h3, p, github, demo, tags = [] }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <motion.article 
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '240px' }}>
          {imageLoading && !imageError && (
            <div className={styles.skeletonImage} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          )}
          {!imageError && (
            <img 
              src={src} 
              alt={`${h3} project screenshot`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ 
                display: 'block',
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                opacity: imageLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
              loading="lazy"
            />
          )}
          {imageError && (
            <div style={{ 
              height: '240px', 
              background: 'var(--surface-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--text-secondary)'
            }}>
              Image unavailable
            </div>
          )}
        </div>
        <div className={styles.projectContent}>
          <h3>{h3}</h3>
          <p>{p}</p>
          {tags.length > 0 && (
            <div className={styles.projectTags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </a>
      {(github || demo) && (
        <div className={styles.projectLinks}>
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projectLink}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.projectLink}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCard;