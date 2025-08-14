import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Skills() {
  const { theme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skillsData = [
    {
      category: "Frontend & Mobile",
      icon: "📱",
      color: "#0987f2",
      skills: [
        { name: "React Native", level: 95, experience: "4 years" },
        { name: "JavaScript", level: 90, experience: "4 years" },
        { name: "TypeScript", level: 85, experience: "3 years" },
        { name: "Redux", level: 88, experience: "3 years" },
        { name: "React", level: 80, experience: "2 years" },
        { name: "Tailwind CSS", level: 85, experience: "2 years" }
      ]
    },
    {
      category: "Backend & APIs",
      icon: "⚡",
      color: "#00d4ff",
      skills: [
        { name: "REST APIs", level: 90, experience: "4 years" },
        { name: "Node.js", level: 75, experience: "2 years" },
        { name: "Firebase", level: 85, experience: "3 years" },
        { name: "WebSocket", level: 80, experience: "2 years" },
        { name: "GraphQL", level: 70, experience: "1 year" }
      ]
    },
    {
      category: "Development Tools",
      icon: "🛠️",
      color: "#4caf50",
      skills: [
        { name: "Git/GitHub", level: 90, experience: "4 years" },
        { name: "GitLab", level: 85, experience: "3 years" },
        { name: "Bitbucket", level: 80, experience: "2 years" },
        { name: "Figma", level: 85, experience: "3 years" },
        { name: "Crashlytics", level: 88, experience: "3 years" },
        { name: "SonarQube", level: 75, experience: "2 years" }
      ]
    },
    {
      category: "Specialized Skills",
      icon: "🎯",
      color: "#ff9800",
      skills: [
        { name: "Mapbox Integration", level: 85, experience: "2 years" },
        { name: "Performance Optimization", level: 88, experience: "3 years" },
        { name: "CI/CD", level: 80, experience: "2 years" },
        { name: "Agile Development", level: 90, experience: "4 years" },
        { name: "Code Review", level: 85, experience: "3 years" },
        { name: "UI/UX Design", level: 80, experience: "3 years" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className={styles.header} variants={categoryVariants}>
        <h1 className="sectionTitle">Technical Expertise</h1>
        <p className={styles.subtitle}>
          Comprehensive skill set built through 4+ years of professional development
        </p>
      </motion.div>

      <motion.div className={styles.skillsGrid} variants={containerVariants}>
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex}
            className={styles.skillCategory}
            variants={categoryVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.categoryHeader}>
              <div 
                className={styles.categoryIcon}
                style={{ backgroundColor: category.color }}
              >
                <span className={styles.iconEmoji}>{category.icon}</span>
              </div>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>

            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className={styles.skillItem}
                  variants={skillVariants}
                  onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillExperience}>{skill.experience}</span>
                    </div>
                    <div className={styles.skillLevel}>
                      <span className={styles.levelText}>{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className={styles.skillBarContainer}>
                    <motion.div 
                      className={styles.skillBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      style={{ backgroundColor: category.color }}
                    >
                      <div className={styles.skillBarGlow} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.statsSection}
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
      </motion.div>
    </motion.section>
  );
}

export default Skills;