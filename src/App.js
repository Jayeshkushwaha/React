import './App.css';
import { lazy, Suspense } from 'react';
import Hero from './sections/Hero/Hero';
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
    Loading...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
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