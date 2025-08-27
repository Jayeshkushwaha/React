import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import profileImage from '../../assets/Design uten navn.webp';
import { useTheme } from '../../common/ThemeContext';
import { useState } from 'react';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [imageError, setImageError] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section 
      id="hero" 
      className={styles.container}
      role="banner"
    >
      <div className={styles.profileContainer}>
        <img
          src={imageError ? `https://ui-avatars.com/api/?name=Jayesh+Kushwaha&size=400&background=0987f2&color=fff&bold=true&font-size=0.4` : profileImage}
          className={styles.hero}
          alt="Jayesh Kushwaha, React Native Developer"
          loading="eager"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className={styles.themeIconContainer}>
          <img
            src={themeIcon}
            alt={`${theme === 'light' ? 'Dark' : 'Light'} mode icon`}
            aria-hidden="true"
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
            title={`Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={styles.themeIcon}
          />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          Jayesh Kushwaha
        </h1>
        <h2 className={styles.role}>
          React Native Developer
        </h2>
        <p className={styles.availability}>Available for opportunities</p>
        <p className={styles.description}>
          Experienced React Native Developer with 3.6+ years of expertise in building scalable mobile applications. Successfully delivered 8 live projects.
        </p>
        <div className={styles.actions}>
          <a 
            href={CV} 
            download="Jayesh_Kushwaha_Resume.pdf"
            aria-label="Download Jayesh Kushwaha's resume"
            className={styles.resumeButton}
          >
            <button type="button">
              <span>Download Resume</span>
            </button>
          </a>
          <nav 
            className={styles.socialLinks} 
            aria-label="Social media links"
          >
            <a 
              href="https://www.linkedin.com/in/jayesh-kushwaha/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Jayesh's LinkedIn profile"
            >
              <img src={linkedinIcon} alt="LinkedIn" aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/Jayeshkushwaha" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Jayesh's GitHub profile"
            >
              <img src={githubIcon} alt="GitHub" aria-hidden="true" />
            </a>
            <a 
              href="mailto:jayesh.kushwaha25@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send email to Jayesh"
            >
              <img src={emailIcon} alt="Email" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Hero;
