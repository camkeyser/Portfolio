import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import './Hero.scss';
import meImage from '../../assets/webp/me.webp';
import orbitAnim from '../../assets/orbit-anim.json';

export default function Hero() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: orbitAnim,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      <div className="about-flex container">
        <div className="profile-container primary">
          <h1>Cam Keyser</h1>
          <h2>I'm a fullstack developer with a background in web design.</h2>
          <p className="flex-item">
            With a strong foundation in both front-end and back-end development, I specialize in creating seamless user experiences and robust web applications. I've honed my skills in various programming languages and frameworks, allowing me to bring ideas to life efficiently and effectively.
          </p>
          <div className="btn-align">
            <button onClick={() => scrollToSection('projects')} className="btn">My Projects</button>
            <button onClick={() => scrollToSection('work-experience')} className="btn">My Past Experience</button>
          </div>
        </div>
        <div className="profile-container secondary">
          <img src={meImage} className="flex-item" alt="Cam Keyser" />
          <div id="lottie-animation"></div>
        </div>
      </div>
    </section>
  );
}