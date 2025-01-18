import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Jayesh Kushwaha</h1>
        <h2>React Native Developer</h2>
        <div className="contact-links">
          <a href="mailto:jayesh.kushwaha25@gmail.com" className="contact-link">
            <Mail size={20} />
            jayesh.kushwaha25@gmail.com
          </a>
          <a href="https://github.com/Jayeshkushwaha" className="contact-link">
            <Github size={20} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/jayesh-kushwaha" className="contact-link">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;