import React from 'react';
import './App.css';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
