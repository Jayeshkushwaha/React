import styles from './ExperienceStyles.module.css';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        <ExperienceCard
          link="https://www.elsner.com/"
          h3="Elsner Technologies Pvt. Ltd."
          h2="July 2024 - January 2025"
          p="I worked on existing projects at Builder.ai. My focus is on providing seamless user experiences and improving app performance to meet the unique needs of each client. I'm excited to be part of a team that constantly pushes the boundaries of innovation in mobile app development."
          skills={['React Native', 'TypeScript', 'Performance Optimization', 'Builder.ai', 'Mobile Development']}
        />
        <ExperienceCard
          link="https://www.peerbits.com/"
          h3="Peerbits"
          h2="February 2023 - May 2024"
          p="I successfully developed the Yelowsoft POS project from start to finish, demonstrating strong initiative, problem solving skills, and effective task prioritization to meet deadlines. My expertise in debugging and troubleshooting allowed me to identify the root causes of issues and implement effective solutions, resulted in improved product stability."
          skills={['React Native', 'POS Systems', 'Project Management', 'Debugging', 'Problem Solving']}
        />
        <ExperienceCard
          link="https://www.ecosmob.com/"
          h3="Ecosmob Technologies"
          h2="January 2022 - January 2023"
          p="Developed crossplatform applications using the React Native framework for both Android and iOS, with expertise in designing and implementing screen layouts to deliver a seamless user experience. Experienced in integrating APIs using RESTful architectures to ensure efficient data management and communication."
          skills={['React Native', 'Cross-platform', 'REST APIs', 'UI/UX Design', 'iOS & Android']}
        />
      </div>
    </section>
  );
}

export default Experience;