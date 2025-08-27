import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
  const skillsData = [
    {
      category: "Frontend & Mobile",
      skills: ["React Native", "JavaScript", "TypeScript", "Redux", "React", "Tailwind CSS"]
    },
    {
      category: "Backend & APIs",
      skills: ["REST APIs", "Node.js", "Firebase", "WebSocket", "GraphQL"]
    },
    {
      category: "Development Tools",
      skills: ["Git/GitHub", "GitLab", "Bitbucket", "Figma", "Crashlytics", "SonarQube"]
    },
    {
      category: "Specialized Skills",
      skills: ["Mapbox Integration", "Performance Optimization", "CI/CD", "Agile Development", "Code Review", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Technical Expertise</h1>
        <p className={styles.subtitle}>
          Comprehensive skill set built through 4+ years of professional development
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {skillsData.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className={styles.skillCategory}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <SkillList skills={category.skills} />
          </div>
        ))}
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>4+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>8</div>
          <div className={styles.statLabel}>Live Projects</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>20+</div>
          <div className={styles.statLabel}>Tech Stack</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Success Rate</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;