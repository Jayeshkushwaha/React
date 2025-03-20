import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import driver from '../../assets/driver.png';
import pos from '../../assets/pos.png';
import poleasy_logo from '../../assets/poleasy_logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://lh3.googleusercontent.com/p/AF1QipNBig04ToOihS0_FaT8_FxVwczskkFxx7Ik6ujP=s1360-w1360-h1020"
          link="https://www.xtraplayer.com/"
          h3="Xtraplayer"
          p="Cricket Scoring"
        />
        <ProjectCard
          src={freshBurger}
          link="https://joinmyne.com/"
          h3="MYNE"
          p="Net Worth Tracker"
        />
        <ProjectCard
          src={hipsster}
          link="https://play.google.com/store/apps/details?id=nl.secure2go.addressregapp&hl=en_US"
          h3="Secure2Go"
          p="Alarm System"
        />
        <ProjectCard
          src={fitLift}
          link="https://play.google.com/store/apps/details?id=com.yelowsoft.user&hl=en_US"
          h3="Yelowsoft"
          p="Car Booking & Food Delivery"
        />
        <ProjectCard
          src={driver}
          link="https://play.google.com/store/apps/details?id=com.yelowsoft.driver&hl=en"
          h3="Yelowsoft Driver"
          p="Ride-Hailing Drivers"
        />
        <ProjectCard
          src={pos}
          link="https://play.google.com/store/apps/details?id=com.yelowsoft.pos&hl=en_US"
          h3="Yelowsoft POS"
          p="Point of Sale"
        />
        <ProjectCard
          src="https://media.licdn.com/dms/image/v2/D560BAQHTw2JD_FhB8g/company-logo_200_200/company-logo_200_200/0/1719568602975/poleasy_logo?e=1747872000&v=beta&t=884Gluc0lh0tKcc586ck8zLD5Kj9SCs0rkXXo8u4hcE"
          link="https://www.mypoleasy.com/"
          h3="PolEasy"
          p="Insurance"
        />
      </div>
    </section>
  );
}

export default Projects;
