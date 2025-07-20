import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container} role="banner">
      {/* <div className={styles.colorModeContainer}> */}
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJ6BrEzfY-bipXkHldIDhsiZaMZ3YGDoIZ-6Pu6wnTTGdGsZeCW=s576-c-no"
          className={styles.hero}
          alt="Profile picture of Jayesh Kushwaha, a React Native Developer"
          loading="eager"
          decoding="async"
          style={{ cursor: 'pointer' }}
          title={`Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        />
        {/* <div className={styles.themeIconContainer}>
          <img
            src={themeIcon}
            alt={`${theme === 'light' ? 'Dark' : 'Light'} mode icon`}
            aria-hidden="true"
            style={{ cursor: 'pointer' }}
            title={`Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={styles.themeIcon}
          />
        </div> */}
      {/* </div> */}
      <div className={styles.info}>
        <h1>
          Jayesh
          <br />
          Kushwaha
        </h1>
        <h2>React Native Developer</h2>
        <nav className={styles.socialLinks} aria-label="Social media links">
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
        <p className={styles.description}>
          Passionate React Native Developer with 3 years of experience in developing user-friendly mobile applications.
        </p>
        <a
          href={CV}
          download="Jayesh_Kushwaha_Resume.pdf"
          aria-label="Download Jayesh Kushwaha's resume"
        >
          <button className="hover" type="button">
            <span>Download Resume</span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
