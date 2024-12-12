import React from 'react';
import './Footer.scss';
import githubLogo from '../../assets/webp/github-logo.webp';
import linkedinLogo from '../../assets/webp/linkedin-logo.webp';

export default function Footer() {
  return (
    <footer>
      <section className="footer-btn-contain">
        <button className="download-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#f1f1f1"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            ></path>
          </svg>
          Download Resume
        </button>
        <hr />
        <h3>Cam Keyser</h3>
        <div className="f-socials">
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
      </section>
    </footer>
  );
}