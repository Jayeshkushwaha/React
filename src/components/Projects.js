import React from 'react';

const Projects = () => {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Pol Easy</h3>
        <p>A service-based insurance project where I handled screen design, API integration, and functionality implementation.</p>
      </div>
      <div className="project">
        <h3>Yelowsoft POS</h3>
        <p>A solo-developed food project that manages stock inventory, orders, and cart functionality.</p>
      </div>
      <div className="project">
        <h3>Myne</h3>
        <p>A financial well-being app that integrates services like bank accounts, crypto wallets, and real-time net worth tracking.</p>
      </div>
      <div className="project">
        <h3>Live Scoring Mobile Application</h3>
        <p>A real-time cricket scoring app with WebSocket synchronization and smooth user interactions.</p>
      </div>
    </div>
  );
};

export default Projects;
