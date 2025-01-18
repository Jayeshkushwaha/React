import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header /> 
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;