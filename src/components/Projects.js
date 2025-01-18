// components/Projects.js
import React from 'react';
import { Calendar } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Xtraplayer",
      description: "A Live Scoring mobile application designed to simplify cricket score management in real-time. Features intuitive interface for scoring, including options for runs, extras (WD, NB, BYE, LB), and quick undo actions. Implements WebSocket for real-time score updates.",
      period: "December 2024 - Present",
      link: "www.xtraplayer.com/"
    },
    {
      name: "MYNE",
      description: "Financial platform that enhances well-being by helping users track, manage, and safeguard assets. Integrates bank accounts, cryptocurrency wallets, and stock exchanges for real-time net worth tracking. Includes estate planning features and access to wealth planners.",
      period: "October 2024 - November 2024",
      link: "apps.apple.com/in/app/myne-track-your-wealth/id6651839016"
    },
    {
      name: "Secure2Go",
      description: "Personal alarm system designed for workers in dangerous situations. Features include emergency button activation, man-down detection, and automatic alerts. Enhances worker safety in challenging environments.",
      period: "August 2024 - November 2024",
      link: "play.google.com/store/apps/details?id=nl.secure2go.addressregapp"
    },
    {
      name: "Yelowsoft User App",
      description: "Comprehensive app combining car booking and food delivery services. Provides real-time ride updates and seamless food ordering experience with wide cuisine options. Features include live tracking and convenient payment processing.",
      period: "February 2023 - May 2024",
      link: "play.google.com/store/apps/details?id=com.yelowsoft.user"
    },
    {
      name: "Yelowsoft Driver App",
      description: "Ride-hailing driver platform with streamlined passenger communication, accurate navigation, and seamless payment processing. Includes tools for earnings maximization and service optimization.",
      period: "February 2023 - May 2024",
      link: "play.google.com/store/apps/details?id=com.yelowsoft.driver"
    },
    {
      name: "Yelowsoft POS",
      description: "Point of Sale system tailored for food-related businesses. Features include stock inventory management, order creation and processing, and cart handling. Designed for restaurants, cafes, food trucks, and fast-food outlets.",
      period: "June 2023 - September 2023",
      link: "play.google.com/store/apps/details?id=com.yelowsoft.pos"
    },
    {
      name: "PolEasy",
      description: "Mobile app streamlining insurance processes for companies, agents, and policyholders. Features include policy management, quote generation, claims handling, and personalized dashboard access.",
      period: "September 2022 - January 2023",
      link: "www.mypoleasy.com/get-started/policyholders-first-time-buyers/"
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-period">
                <Calendar size={16} />
                <span>{project.period}</span>
              </div>
              <a href={`https://${project.link}`} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;