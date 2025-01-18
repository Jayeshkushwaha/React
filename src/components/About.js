import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>Summary</h2>
        <div className="summary-content">
          <div className="main-summary">
            <p>
              React Native developer with 2.6 years of experience in building scalable mobile applications. 
              Graduated in Computer Engineering from Gujarat Technology University with a CGPA of 7.63.
            </p>
          </div>
          <div className="key-highlights">
            <h3>Professional Highlights</h3>
            <ul>
              <li>
                <strong>Technical Expertise:</strong> Experienced in React Native, TypeScript, JavaScript, Redux, REST APIs, and version control with GitHub.
              </li>
              <li>
                <strong>Project Leadership:</strong> Successfully led development of 7 live projects, including solo development of complete applications.
              </li>
              <li>
                <strong>Problem Solving:</strong> Strong track record in debugging, troubleshooting, and implementing effective solutions for complex technical challenges.
              </li>
            </ul>
          </div>
          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>HackerRank Certified JavaScript (2024)</li>
              <li>Cutshort Certified React Native (2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;