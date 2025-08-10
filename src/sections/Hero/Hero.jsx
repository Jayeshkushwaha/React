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
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import TypewriterText from '../../components/TypewriterText';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }
    }
  };

  return (
    <motion.section 
      id="hero" 
      className={styles.container} 
      role="banner"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.colorModeContainer} variants={itemVariants}>
        <motion.img
          src="https://lh3.googleusercontent.com/a/ACg8ocJ6BrEzfY-bipXkHldIDhsiZaMZ3YGDoIZ-6Pu6wnTTGdGsZeCW=s576-c-no"
          className={styles.hero}
          alt="Jayesh Kushwaha, React Native Developer"
          loading="eager"
          decoding="async"
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
          title={`Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
      </motion.div>
      <motion.div className={styles.info} variants={itemVariants}>
        <motion.h1 variants={itemVariants}>
          <TypewriterText text="Jayesh" delay={100} />
          <br />
          <TypewriterText text="Kushwaha" delay={100} />
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          <span className={styles.role}>React Native Developer</span>
          <span className={styles.availability}>Available for opportunities</span>
        </motion.h2>
        <motion.nav 
          className={styles.socialLinks} 
          aria-label="Social media links"
          variants={itemVariants}
        >
          <motion.a 
            href="https://www.linkedin.com/in/jayesh-kushwaha/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Jayesh's LinkedIn profile"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={linkedinIcon} alt="LinkedIn" aria-hidden="true" />
          </motion.a>
          <motion.a 
            href="https://github.com/Jayeshkushwaha" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Jayesh's GitHub profile"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={githubIcon} alt="GitHub" aria-hidden="true" />
          </motion.a>
          <motion.a 
            href="mailto:jayesh.kushwaha25@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Send email to Jayesh"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={emailIcon} alt="Email" aria-hidden="true" />
          </motion.a>
        </motion.nav>
        <motion.p className={styles.description} variants={itemVariants}>
          Experienced React Native Developer with 3.6+ years of expertise in building scalable mobile applications. Successfully delivered 8 live projects.
        </motion.p>
        <motion.a 
          href={CV} 
          download="Jayesh_Kushwaha_Resume.pdf"
          aria-label="Download Jayesh Kushwaha's resume"
          variants={itemVariants}
        >
          <motion.button 
            className="hover" 
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
          </motion.button>
        </motion.a>
        
        <motion.div 
          className={styles.scrollIndicator}
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
