import React from 'react';

function ExperienceCard({ h2, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <h3>{h3}</h3>
      <h4>{h2}</h4>
      <p>{p}</p>
    </a>
  );
}

export default ExperienceCard;
