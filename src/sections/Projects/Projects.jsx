import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import driver from '../../assets/driver.png';
import pos from '../../assets/pos.png';
import poleasyLogo from '../../assets/poleasy_logo.jpeg';
import novocabs from '../../assets/novocabs.webp';
import an2cabs from '../../assets/an2cabs.webp';
import xtraplayer from '../../assets/xtraplayer.jpg';
import athenaFlowers from '../../assets/athena_flowers.webp';
import aiDating from '../../assets/ai_dating.png';
import mocktest from '../../assets/mocktest.png';
import domino from '../../assets/domino.png';
import herSecretDesires from '../../assets/her_secret_desires.png';
import sensitivegpt from '../../assets/sensitivegpt.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    {
      src: domino,
      link: "#",
      h3: "Domino Teacher & Parent App",
      p: "Redefining how parents and teachers collaborate! From student screenings and child reports to real-time chat and activity tracking.",
      tags: ["React Native", "Education", "Real-time Chat"]
    },
    {
      src: mocktest,
      link: "#",
      h3: "Mock Warrior",
      p: "Mock test applications for various competitive exam platforms.",
      tags: ["React Native", "Education", "Exams"]
    },
    {
      src: aiDating,
      link: "https://wieved.com/",
      h3: "AI Dating",
      p: "Smart matchmaking mobile application that helps users connect through AI-powered profile matching, real-time chat, and intelligent conversation assistance.",
      tags: ["React Native", "AI Matching", "Real-time Chat"]
    },
    {
      src: herSecretDesires,
      link: "https://www.zayli.com.au/Website/sign-in",
      h3: "Her Secret Desires",
      p: "Modern dating mobile application designed to enable seamless matching, real-time communication, and premium social interaction features.",
      tags: ["React Native", "Dating", "Social Interaction"]
    },
    {
      src: sensitivegpt,
      link: "#",
      h3: "SensitiveGPT",
      p: "Mental wellness mobile application designed to help users track emotions, analyze energy patterns, and receive AI-driven supportive guidance.",
      tags: ["React Native", "Mental Wellness", "AI-driven"]
    },
    {
      src: athenaFlowers,
      link: "https://play.google.com/store/apps/details?id=com.athena.driver",
      h3: "Athena Flowers",
      p: "E-commerce app for Saudi florist with natural, dried & artificial flowers. Features same-day delivery, gift wrapping, online/offline integration.",
      tags: ["React Native", "E-commerce", "Cursor AI", "Claude Code"]
    },
    {
      src: xtraplayer,
      link: "https://www.instagram.com/xtraplayerindia/",
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
      link: "https://apps.apple.com/in/app/yelowsoftpos/id6736819385?l=ml",
      h3: "Yelowsoft POS",
      p: "Solo-developed point-of-sale for food industry with complete stock management, order processing, and cart functionality from scratch.",
      tags: ["POS", "Solo Project", "TypeScript", "Stock Management"]
    },
    {
      src: novocabs,
      link: "https://play.google.com/store/apps/details?id=com.novocabs.user&hl=en_IN",
      h3: "Novo – Cabs, Autos & Bikes",
      p: "Kashmir's new, affordable and the fastest way to get around any city in J&K.",
      tags: ["Taxi Booking", "Ride Hailing", "Real-time", "Redux"]
    },
    {
      src: an2cabs,
      link: "https://play.google.com/store/apps/details?id=com.dispatchan2.user&hl=en_IN",
      h3: "an2 Cabs - Ride in style",
      p: "We offer high-quality service and rides for a very low price. Book Now!",
      tags: ["Ride App", "Navigation", "Payment", "React Native"]
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
      link: "https://www.linkedin.com/company/poleasy/",
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
