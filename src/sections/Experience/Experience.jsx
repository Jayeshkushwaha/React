import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  const experiences = [
    {
      link: "https://www.elsner.com/",
      company: "Elsner Technologies Pvt. Ltd.",
      role: "React Native Developer",
      duration: "July 2024 - January 2025",
      description: "Worked on existing projects at Builder.ai, focusing on providing seamless user experiences and improving app performance. Collaborated with cross-functional teams to meet unique client needs and push boundaries in mobile app innovation.",
      highlights: ["Builder.ai Projects", "Performance Optimization", "User Experience"]
    },
    {
      link: "https://www.peerbits.com/",
      company: "Peerbits",
      role: "React Native Developer",
      duration: "February 2023 - May 2024",
      description: "Successfully developed the Yelowsoft POS project from inception to completion. Led debugging efforts and implemented innovative solutions that significantly improved product stability and performance.",
      highlights: ["Full Project Lifecycle", "Problem Solving", "Product Stability"]
    },
    {
      link: "https://www.ecosmob.com/",
      company: "Ecosmob Technologies",
      role: "React Native Developer",
      duration: "January 2022 - January 2023",
      description: "Developed cross-platform applications for Android and iOS using React Native. Specialized in API integration using RESTful architectures and created engaging user interfaces that enhanced user engagement.",
      highlights: ["Cross-Platform Development", "API Integration", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            link={exp.link}
            h3={exp.company}
            h2={exp.duration}
            p={exp.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
