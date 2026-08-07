import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  const experiences = [
    {
      link: "https://www.techugo.com/",
      company: "techugo",
      role: "Software Developer",
      duration: "Nov 2025 - Present",
      description: "Working on AI-powered mobile applications using React Native. Building scalable features, integrating APIs, and implementing real-time functionalities. Delivering high-performance production-ready apps with focus on seamless user experience. Utilizing Cursor AI and modern tooling for improved development efficiency.",
      highlights: ["React Native", "AI-Powered Apps", "Cursor AI"]
    },
    {
      link: "https://www.spaceotechnologies.com/",
      company: "Space-O Technologies",
      role: "Software Engineer",
      duration: "Apr 2025 - Aug 2025",
      description: "Worked on an existing project originally built using a low-code/no-code platform like Bolt ai. Enhancing the application by adding new features and bug fixes using Cursor & Claude Code to improve performance and user experience.",
      highlights: ["Low-code/No-code", "AI-Assisted Development", "Performance Enhancement"]
    },
    {
      link: "https://www.elsner.com/",
      company: "Elsner Technologies Pvt. Ltd.",
      role: "Associate Software Developer",
      duration: "July 2024 - January 2025",
      description: "Worked on existing projects at Builder.ai. Focused on providing seamless user experiences and improving app performance to meet unique client needs. Part of a team constantly pushing boundaries of innovation in mobile app development.",
      highlights: ["Builder.ai Experience", "Performance Optimization", "User Experience"]
    },
    {
      link: "https://www.peerbits.com/",
      company: "Peerbits",
      role: "Software Engineer",
      duration: "February 2023 - May 2024",
      description: "Successfully developed Yelowsoft POS project from start to finish. Demonstrated strong initiative, problem-solving skills, and effective task prioritization. Expertise in debugging and troubleshooting resulted in improved product stability.",
      highlights: ["Solo Development", "Full Project Lifecycle", "Product Stability"]
    },
    {
      link: "https://www.ecosmob.com/",
      company: "Ecosmob Technologies",
      role: "Software Engineer",
      duration: "January 2022 - January 2023",
      description: "Developed cross-platform applications using React Native for Android and iOS. Experienced in integrating APIs using RESTful architectures and designing screen layouts to deliver seamless user experience.",
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
