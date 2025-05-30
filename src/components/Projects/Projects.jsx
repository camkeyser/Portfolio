import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import wpImage from '../../assets/wp-mu.jpg';
import spaceImage from '../../assets/space-mu.jpg';
import landingImage from '../../assets/lp-mu.jpg';
import feedImage from '../../assets/feed-mu.jpg';
import peaksTop from '../../assets/webp/peaks-top.webp';
import peaksBot from '../../assets/webp/peaks-bot.webp';
import kanbanImage from '../../assets/kanban-mu.jpg';

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
    'SCSS',
  ];

  const projects = [
    {
      title: 'App Landing Page',
      skills: ['JavaScript', 'PHP'],
      image: landingImage,
      link: 'https://lp.camkeyser.com/',
      ghLink: 'https://github.com/camkeyser/triton',
    },
    {
      title: 'WordPress Theme',
      skills: ['JavaScript', 'PHP', 'GSAP'],
      image: wpImage,
      link: 'https://wp.camkeyser.com/',
      ghLink: 'https://github.com/camkeyser/custom-dev-theme',
    },
    {
      title: 'Kanban Board',
      skills: ['JavaScript', 'React', 'SCSS'],
      image: kanbanImage,
      link: 'https://kanban.camkeyser.com/',
      ghLink: '',
    },
    {
      title: 'My Feed - Dashboard',
      skills: ['JavaScript', 'SCSS', 'React', 'REST API', 'GSAP'],
      image: feedImage,
      link: 'https://feed.camkeyser.com/',
      ghLink: 'https://github.com/camkeyser/my-dashboard',
    },
    {
      title: 'Solar System App',
      skills: ['JavaScript', 'React', 'Three.js', 'REST API', 'SCSS'],
      image: spaceImage,
      link: 'https://space.camkeyser.com/',
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
        <h2 id="anchor-projects">Projects</h2>
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
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="project-card"
                data-skills={project.skills.map(slugify).join(',')}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <p className="project-title">{project.title}</p>
              </div>
            </a>
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