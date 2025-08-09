import React, { useState, useEffect } from 'react';
import styles from './FooterStyles.module.css';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            marginBottom: 'var(--spacing-md)',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Jayesh Kushwaha
          </h3>
          <p className={styles.footerText}>
            Passionate React Native Developer creating innovative mobile solutions.
            Let's build something amazing together!
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.linkedin.com/in/jayesh-kushwaha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a 
              href="https://github.com/Jayeshkushwaha" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a 
              href="mailto:jayesh.kushwaha25@gmail.com" 
              className={styles.socialLink}
              aria-label="Email"
            >
              <img src={emailIcon} alt="Email" />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} Jayesh Kushwaha. All rights reserved.
        </p>
        <p className={styles.copyrightText}>
          Made with <span className={styles.heart}>❤</span> using React
        </p>
      </div>

      <button 
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      />
    </footer>
  );
}

export default Footer;