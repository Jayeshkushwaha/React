import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="REST APIs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Firebase" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Bitbucket" />
        <SkillList src={checkMarkIcon} skill="Gitlab" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="User Interface Design" />
        <SkillList src={checkMarkIcon} skill="Functionality" />
        <SkillList src={checkMarkIcon} skill="Test Cases" />
        <SkillList src={checkMarkIcon} skill="Sonarqube" />
        <SkillList src={checkMarkIcon} skill="CI/CD" />
      </div>
    </section>
  );
}

export default Skills;
