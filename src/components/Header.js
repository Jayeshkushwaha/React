import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocKX78-xhwIiwrYg2uRgUPgNdpahOFw8VWKihLfKBPBWCjv_Fmrm=s576-c-no" // Your profile image URL
          alt="Profile"
          className="profile-image animate-fade-in"
        />
        <h1 className="animate-slide-in">Jayesh Kushwaha</h1>
        <h2 className="animate-slide-in">React Native Developer</h2>
        <p className="tagline animate-slide-in">
          Building robust, scalable, and user-friendly mobile apps with React Native.
        </p>
        <div className="contact-links animate-slide-up">
          <a href="mailto:jayesh.kushwaha25@gmail.com" className="contact-link">
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a href="https://github.com/Jayeshkushwaha" className="contact-link">
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/jayesh-kushwaha" className="contact-link">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
