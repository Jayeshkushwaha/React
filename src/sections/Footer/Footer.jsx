import React from 'react';
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
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className={styles.container}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.linkedin.com/in/jayesh-kushwaha/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Jayesh's LinkedIn profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a 
                href="https://github.com/Jayeshkushwaha" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Jayesh's GitHub profile"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a 
                href="mailto:jayesh.kushwaha25@gmail.com"
                aria-label="Send email to Jayesh"
              >
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Jayesh Kushwaha. All rights reserved.
          </p>
        </div>
      </footer>
      
      <button 
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default Footer;
