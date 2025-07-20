// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));

  return observer;
};

// Add fade-in classes to sections
export const addFadeInClasses = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    section.style.animationDelay = `${index * 0.1}s`;
  });
};

// Smooth scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Parallax effect for background elements
export const initParallax = () => {
  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
  };

  const requestParallaxUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestParallaxUpdate);
  return requestParallaxUpdate;
};