import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  const checkMarkIcon = checkMarkIconLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>📱</div>
            <h3 className={styles.categoryTitle}>Frontend Development</h3>
          </div>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React Native" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="REST APIs" />
          </div>
        </div>

        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>🛠️</div>
            <h3 className={styles.categoryTitle}>Tools & Platforms</h3>
          </div>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Firebase" />
            <SkillList src={checkMarkIcon} skill="GitHub" />
            <SkillList src={checkMarkIcon} skill="Bitbucket" />
            <SkillList src={checkMarkIcon} skill="GitLab" />
          </div>
        </div>

        <div className={styles.skillCategory}>
          <div className={styles.categoryHeader}>
            <div className={styles.categoryIcon}>⚡</div>
            <h3 className={styles.categoryTitle}>Development Practices</h3>
          </div>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="UI/UX Design" />
            <SkillList src={checkMarkIcon} skill="Testing" />
            <SkillList src={checkMarkIcon} skill="SonarQube" />
            <SkillList src={checkMarkIcon} skill="CI/CD" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
