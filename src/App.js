import './App.css';
import { lazy, Suspense } from 'react';
import Hero from './sections/Hero/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

const Projects = lazy(() => import('./sections/Projects/Projects'));
const Experience = lazy(() => import('./sections/Experience/Experience'));
const Skills = lazy(() => import('./sections/Skills/Skills'));
const Footer = lazy(() => import('./sections/Footer/Footer'));

const LoadingFallback = () => (
  <div style={{ 
    padding: '40px', 
    textAlign: 'center', 
    color: 'var(--text-secondary)' 
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid var(--surface-color)',
      borderTop: '3px solid var(--btn-color)',
      borderRadius: '50%',
      margin: '0 auto',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <AnimatedBackground />
      <ScrollToTop />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
