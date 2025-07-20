import styles from './ExperienceStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import driver from '../../assets/driver.png';
import pos from '../../assets/pos.png';
import poleasy_logo from '../../assets/poleasy_logo.png';
import ExperienceCard from '../../common/ExperienceCard';

function Experience() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.projectsContainer}>
        <ExperienceCard
          link="https://www.elsner.com/"
          h3="Elsner Technologies Pvt. Ltd."
          h2="July 2024 - January 2025"
          p="I worked on existing projects at Builder.ai. My focus is on providing seamless user experiences and improving app performance to meet the unique needs of each client. I’m excited to be part of a team that constantly pushes the boundaries of innovation in mobile app development."
        />
        <ExperienceCard
          link="https://www.peerbits.com/"
          h3="Peerbits"
          h2="February 2023 - May 2024"
          p="I successfully developed the Yelowsoft POS project from start to finish, demonstrating strong initiative, problem solving skills, and effective task prioritization to meet deadlines. My expertise in debugging and troubleshooting allowed me to identify the root causes of issues and implement effective solutions, resulting in improved product stability. With a detail oriented and analytical approach, I consistently uncovered hidden challenges and proposed innovative solutions, driving continuous improvements and ensuring the project’s success."
        />
        <ExperienceCard
          link="https://www.ecosmob.com/"
          h3="Ecosmob Technologies"
          h2="January 2022 - January 2023"
          p="Developed crossplatform applications using the React Native framework for both Android and iOS, with expertise in designing and implementing screen layouts to deliver a seamless user experience. Experienced in integrating APIs using RESTful architectures to ensure efficient data management and communication. Proficient in enhancing React Native applications by adding features and interactions that improve usability and increase user engagement."
        />
      </div>
    </section>
  );
}

export default Experience;
