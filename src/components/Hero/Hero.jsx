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
          <h2>I’m a full-stack developer dedicated to creating seamless, innovative digital solutions.</h2>
          <p className="flex-item">
          With experience in both front-end and back-end development, I enjoy tackling complex problems and creating reliable, user-friendly solutions. I’ve worked with a variety of modern programming languages and frameworks, which helps me bring ideas to life as functional and polished applications.
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