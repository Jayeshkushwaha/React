import React from 'react';
import { Calendar, Building2 } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Developer",
      company: "Elsner Technologies Pvt. Ltd.",
      period: "July 2024 - Present",
      location: "Builder.ai",
      responsibilities: [
        "Creating dynamic and scalable mobile applications using React Native",
        "Focusing on providing seamless user experiences and improving app performance",
        "Meeting unique client needs through innovative mobile app development",
        "Working on existing projects to enhance functionality and user experience",
        "Contributing to team efforts in pushing innovation boundaries"
      ]
    },
    {
      role: "Software Engineer",
      company: "Peerbits",
      period: "February 2023 - May 2024",
      responsibilities: [
        "Successfully developed the Yelowsoft POS project from start to finish",
        "Demonstrated strong initiative and problem-solving skills",
        "Implemented effective task prioritization to meet project deadlines",
        "Expertise in debugging and troubleshooting to identify root causes",
        "Applied detail-oriented and analytical approach to uncover hidden challenges",
        "Proposed innovative solutions driving continuous improvements",
        "Ensured project success through comprehensive development approach"
      ]
    },
    {
      role: "Software Engineer",
      company: "Ecosmob Technologies",
      period: "June 2022 - January 2023",
      responsibilities: [
        "Developed cross-platform applications using React Native framework",
        "Created and implemented screen layouts for seamless user experience",
        "Integrated APIs using RESTful architectures for efficient data management",
        "Enhanced React Native applications with new features and interactions",
        "Improved usability and increased user engagement through development",
        "Ensured efficient communication and data handling in applications"
      ]
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <div className="company-info">
                  <Building2 size={16} />
                  <h4>{exp.company}</h4>
                </div>
                <div className="period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="location">
                    <span>Working at: {exp.location}</span>
                  </div>
                )}
              </div>
              <div className="responsibilities">
                <ul>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;