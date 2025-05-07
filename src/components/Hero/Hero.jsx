import React, { useEffect } from 'react';
import './Hero.scss';

export default function Hero() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="about-flex container">
        <div className="profile-container primary">
          <h1>Cam Keyser</h1>
          <h2>Full-stack Developer</h2>
          <h3>React • WordPress • JavaScript • PHP • SCSS</h3>
          <p className="flex-item">
            With experience in both front-end and back-end development, I enjoy solving problems and bringing ideas to life. I'm currently available for new opportunities and ready to dive into a role where I can make an immediate impact.
          </p>
          <div className="hero-socials">
            <a
              href="https://github.com/camkeyser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <svg width="34" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 1.7 2 .2-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.2 1.9 1.2 3.2 0 4.4-2.8 5.4-5.5 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/cam-keyser/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.6h-3v-9h2.9v1.2h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3v5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-divider">
        <button onClick={() => scrollToSection('anchor-projects')} className="btn">Projects</button>
        |
        <button onClick={() => scrollToSection('work-experience')} className="btn">Resume</button>
      </div>
    </section>
  );
}