import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

gsap.registerPlugin(ScrollTrigger);

import wpImage from '../../assets/wp-mu.jpg';
import spaceImage from '../../assets/space-mu.jpg';
import animImage from '../../assets/animation-mu.jpg';
import feedImage from '../../assets/feed-mu.jpg';
import peaksTop from '../../assets/webp/peaks-top.webp';
import peaksBot from '../../assets/webp/peaks-bot.webp';

export default function Projects() {
  const [activeSkill, setActiveSkill] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const skills = [
    'All',
    'JavaScript',
    'PHP',
    'React',
    'Three.js',
    'REST API',
    'GSAP',
    'SASS',
  ];

  const projects = [
    {
      title: 'WordPress Theme',
      skills: ['JavaScript', 'PHP', 'GSAP', 'SASS', 'Three.js'],
      image: wpImage,
      link: 'https://wp.camkeyser.com/',
      ghLink: 'https://github.com/camkeyser/custom-dev-theme',
    },
    {
      title: 'Solar System App',
      skills: ['JavaScript', 'React', 'Three.js', 'REST API', 'SASS'],
      image: spaceImage,
      link: 'https://space.camkeyser.com/',
      ghLink: '',
    },
    {
      title: 'My Feed - Dashboard',
      skills: ['JavaScript', 'SASS', 'React', 'REST API', 'GSAP'],
      image: feedImage,
      link: 'https://feed.camkeyser.com/',
      ghLink: 'https://github.com/camkeyser/my-dashboard',
    },
    {
      title: 'Animation Sandbox',
      skills: ['JavaScript', 'SASS', 'React', 'Three.js', 'GSAP'],
      image: animImage,
      link: '',
      ghLink: '',
    },
  ];

  const slugify = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
  };

  useEffect(() => {
    setIsAnimating(true);
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top bottom',
        toggleActions: 'play none none none',
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      onComplete: () => setIsAnimating(false),
    });

    ScrollTrigger.refresh();

    return () => {
      gsap.killTweensOf('.project-card');
    };
  }, [activeSkill]);

  const handleSkillClick = (skill) => {
    if (isAnimating) return;
    setActiveSkill(slugify(skill));
  };

  const getModalContent = (project) => {
    if (project.title === 'Animation Sandbox') {
      return `
        <div style="padding: 20px; text-align: center;">
          <h3 style="margin-bottom: 15px;">Animation Sandbox</h3>
          <p>This is currently a work in progress. Updates will come shortly.</p>
        </div>
      `;
    }
    if (project.title === 'Solar System App') {
      return `
        <div style="padding: 20px; text-align: center;">
          <h3 style="margin-bottom: 15px;">${project.title}</h3>
          <div class="m-img-box"><img src="${project.image}"></div>
          <div style="display: flex; gap: 10px; justify-content: center;">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn">
              View Project
            </a>
          </div>
        </div>
      `;
    }

    return `
      <div style="padding: 20px; text-align: center;">
        <h3 style="margin-bottom: 15px;">${project.title}</h3>
        <div class="m-img-box"><img src="${project.image}"></div>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn">
            View Project
          </a>
          <a href="${project.ghLink}" target="_blank" rel="noopener noreferrer" class="btn secondary">
            View Github
          </a>
        </div>
      </div>
    `;
  };

  const filteredProjects = projects.filter(
    (project) =>
      activeSkill === 'all' ||
      project.skills.map(slugify).includes(activeSkill)
  );

  return (
    <section id="projects">
      <img
        src={peaksTop}
        alt="Peaks Top"
        className="section-transition-top"
      />
      <div className="inner-contain">
        <h2>Projects</h2>
        <div className="skills-filter">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`skill ${
                activeSkill === slugify(skill) ? 'active' : ''
              }`}
              data-skill={slugify(skill)}
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={(e) => {
                e.preventDefault();
                Fancybox.show([
                  {
                    src: getModalContent(project),
                    type: "html",
                  },
                ]);
              }}
            >
              <div
                className="project-card"
                data-skills={project.skills.map(slugify).join(',')}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <p className="project-title">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={peaksBot}
        alt="Peaks Bottom"
        className="section-transition-bot"
      />
    </section>
  );
}