import React from 'react';
import './Header.scss';
import logo from '../../assets/webp/ck-logo.webp';
import githubLogo from '../../assets/webp/github-logo.webp';
import linkedinLogo from '../../assets/webp/linkedin-logo.webp';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="socials">
          <a
            href="https://github.com/camkeyser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/cam-keyser/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
}