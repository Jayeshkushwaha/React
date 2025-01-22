import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <>
    <div/>
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGs9X8YbY-FuQ/profile-displayphoto-shrink_400_400/B4DZP4yF.jHMAg-/0/1735045703416?e=1743033600&v=beta&t=h-lyaynEdC8qn4odwjzoKdK36DfXc9nniKqyjoq0-B4"
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
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
          <a href="https://github.com/Jayeshkushwaha" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/jayesh-kushwaha/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
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
