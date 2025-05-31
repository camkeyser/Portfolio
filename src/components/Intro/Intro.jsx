import React from 'react';
import './Intro.scss';
import logoReact from '../../assets/logo-react.png';
import logoJS from '../../assets/logo-js.png';
import logoPHP from '../../assets/logo-php.png';
import logoSASS from '../../assets/logo-sass.png';
import logoGSAP from '../../assets/logo-gsap.png';
import myImg from '../../assets/me.png';

export default function Intro() {
  return (
      <section id="intro" className="intro-section">
        <div className="inner-contain">
          <div className="fw">
              <h2>About Me</h2>
          </div>
          <div className="intro-left">
            <div className="sparkle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 80 80" width="200" height="200" fill="#111418"><polygon points="54.9,51.8 85.8,46.1 54.7,40.8 63.2,28.5 51.3,37 45.7,6 40.4,37.2 28.2,28.5 36.6,40.8 5.7,46.1 36.6,51.8 28.2,63.6 40.4,55.2 45.7,86.1 51.4,55.4 63.2,63.6"/></svg>
            </div>
            <img src={myImg} alt="Cam Keyser Photo" />
          </div>
          <div className="intro-right">
              <h2>Hello, I'm Cam</h2>
              <p>
              Based out of Salt Lake City, I am a full-stack developer with 8+ years of experience building high-performance web solutions. I specialize in React front-end development, and WordPress theme and plugin development using either PHP or React. I've worked with many clients across the country, like Paramount, Boeing, and Nickelodeon to deliver custom solutions that perfectly align with business needs.
              <br />
              <br />
              When I'm not writing code for a project, I'm usually rooting for my favorite football team, the Atlanta Falcons, or tracking the latest rocket launches and space missions. 
              </p>
              <div className="logo-section">
                <img src={logoReact} alt="Logo from tech stack" />
                <img src={logoJS} alt="Logo from tech stack" />
                <img src={logoPHP} alt="Logo from tech stack" />
                <img src={logoSASS} alt="Logo from tech stack" />
                <img src={logoGSAP} alt="Logo from tech stack" />
              </div>
          </div>
        </div>
      </section>
  );
}