import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import driver from '../../assets/driver.png';
import pos from '../../assets/pos.png';
import poleasyLogo from '../../assets/poleasy_logo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/3698/3698293.png",
      link: "https://play.google.com/store/apps/details?id=com.athena.driver",
      h3: "Athena Flowers",
      p: "E-commerce app for Saudi florist with natural, dried & artificial flowers. Features same-day delivery, gift wrapping, online/offline integration.",
      tags: ["React Native", "E-commerce", "Cursor AI", "Claude Code"]
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/1099/1099680.png",
      link: "https://www.xtraplayer.com/",
      h3: "Xtraplayer",
      p: "Cricket scoring app with real-time tracking, WebSocket integration for live updates, comprehensive extras management (wides, no-balls).",
      tags: ["React Native", "WebSocket", "Real-time", "UI/UX"]
    },
    {
      src: freshBurger,
      link: "https://joinmyne.com/",
      h3: "MYNE",
      p: "Financial super-app integrating bank accounts, crypto wallets, stock exchanges with real-time net worth tracking and portfolio management.",
      tags: ["FinTech", "Crypto", "Banking", "React Native"]
    },
    {
      src: pos,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.pos",
      h3: "Yelowsoft POS",
      p: "Solo-developed point-of-sale for food industry with complete stock management, order processing, and cart functionality from scratch.",
      tags: ["POS", "Solo Project", "TypeScript", "Stock Management"]
    },
    {
      src: fitLift,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.user",
      h3: "Yelowsoft User",
      p: "Food delivery and taxi booking app with real-time updates, seamless journey tracking, and convenient multi-cuisine ordering.",
      tags: ["Food Delivery", "Taxi Booking", "Real-time", "Redux"]
    },
    {
      src: driver,
      link: "https://play.google.com/store/apps/details?id=com.yelowsoft.driver",
      h3: "Yelowsoft Driver",
      p: "Ride-hailing driver app streamlining communication, navigation, payment processing with data insights to maximize earnings.",
      tags: ["Driver App", "Navigation", "Payment", "React Native"]
    },
    {
      src: hipsster,
      link: "https://play.google.com/store/apps/details?id=nl.secure2go.addressregapp",
      h3: "Secure2Go",
      p: "Safety app for workers in hazardous environments with personal alarm system and automatic man-down detection.",
      tags: ["Safety", "IoT", "Emergency", "React Native"]
    },
    {
      src: poleasyLogo,
      link: "https://www.mypoleasy.com/",
      h3: "PolEasy",
      p: "Insurance platform streamlining policy management, quote generation, and claims handling via personalized dashboard.",
      tags: ["Insurance", "FinTech", "REST APIs", "UI Design"]
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
