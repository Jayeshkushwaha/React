import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import driver from '../../assets/driver.png';
import pos from '../../assets/pos.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    {
      src: "https://media.licdn.com/dms/image/v2/D560BAQFvq7qqylg7tg/company-logo_200_200/B56ZUDlP1_HQAM-/0/1739521851285/xtraplayersports_logo?e=1755129600&v=beta&t=Une8b5DPzAomvSEsFEGQ3Ppukn7mVCQlTL2xbsUdlPw",
      link: "https://www.xtraplayer.com/",
      h3: "Xtraplayer",
      p: "Cricket Scoring App - Real-time scoring and statistics",
      tags: ["React Native", "Firebase", "Real-time"]
    },
    {
      src: freshBurger,
      link: "https://joinmyne.com/",
      h3: "MYNE",
      p: "Net Worth Tracker - Track financial assets and growth",
      tags: ["Finance", "Analytics", "React Native"]
    },
    {
      src: hipsster,
      link: "https://play.google.com/store/apps/details?id=nl.secure2go.addressregapp&hl=en_US",
      h3: "Secure2Go",
      p: "Smart Alarm System - Home security and monitoring",
      tags: ["IoT", "Security", "React Native"]
    },
    {
      src: fitLift,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.user&hl=en_US",
      h3: "Yelowsoft",
      p: "Multi-Service Platform - Car Booking & Food Delivery",
      tags: ["E-commerce", "Maps", "Redux"]
    },
    {
      src: driver,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.driver&hl=en",
      h3: "Yelowsoft Driver",
      p: "Driver App - Ride-hailing partner application",
      tags: ["GPS", "Real-time", "React Native"]
    },
    {
      src: pos,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.pos&hl=en_US",
      h3: "Yelowsoft POS",
      p: "Point of Sale - Restaurant & retail management",
      tags: ["POS", "TypeScript", "SQLite"]
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D560BAQHTw2JD_FhB8g/company-logo_200_200/company-logo_200_200/0/1719568602975/poleasy_logo?e=1755129600&v=beta&t=q4XeShmlt5d0hyjkj1SLyRYuz9V11JAfv3sReeJWqKU",
      link: "https://www.mypoleasy.com/",
      h3: "PolEasy",
      p: "Insurance Platform - Digital insurance solutions",
      tags: ["FinTech", "API Integration", "React Native"]
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
