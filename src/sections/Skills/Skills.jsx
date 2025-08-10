import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { motion } from 'framer-motion';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST APIs",
        "Tailwind CSS",
        "Mapbox"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Firebase",
        "Figma",
        "Crashlytics",
        "SonarQube"
      ]
    },
    {
      title: "Industry Knowledge",
      skills: [
        "User Interface Design",
        "Functionality",
        "Test Cases",
        "CI/CD",
        "Agile Development",
        "Code Review",
        "Performance Optimization"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
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
      <motion.h1 className="sectionTitle" variants={itemVariants}>Skills</motion.h1>
      <motion.div className={styles.skillsContainer} variants={containerVariants}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className={styles.skillCategory}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <motion.div className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SkillList src={checkMarkIcon} skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;