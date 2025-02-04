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
    <>
    <div/>
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocKX78-xhwIiwrYg2uRgUPgNdpahOFw8VWKihLfKBPBWCjv_Fmrm=s576-c-no"
          className={styles.hero}
          alt="Profile picture of Jayesh Kushwaha"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Jayesh
          <br />
          Kushwaha
        </h1>
        <h2>React Native Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/jayesh-kushwaha/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Jayeshkushwaha" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="mailto:jayesh.kushwaha25@gmail.com" target="_blank">
            <img src={emailIcon} alt="Email icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate React Native Developer with 2.6 years of experience in developing user-friendly mobile applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
    </>
  );
}

export default Hero;
