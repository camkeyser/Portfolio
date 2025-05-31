import React from 'react';
import './Experience.scss';
import rrpartners from '../../assets/webp/rr.webp';
import oozle from '../../assets/webp/oozle.webp';
import nfinite from '../../assets/webp/nfinite.webp';
import bp from '../../assets/webp/bp.webp';
import cklogo from '../../assets/webp/ck.webp';

export default function Experience() {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={cklogo} alt="Freelance" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer</p>
          <p className="experience-company">Freelance Development</p>
          <p className="experience-dates">Nov 2024 - Present • Herriman, UT</p>
          <ul className="experience-description">
            <li>Build and maintain websites for clients. As well as providing updates, support, and technical help as needed.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={rrpartners} alt="R&R Partners" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Digital Developer</p>
          <p className="experience-company">R&R Partners</p>
          <p className="experience-dates">Jun 2022 - Oct 2024 • Las Vegas, NV</p>
          <ul className="experience-description">
            <li>
              Full Stack Developer responsible for managing and maintaining several client websites, ensuring optimal performance and user experience across all platforms.
            </li>
            <li>
              Contributed to high-profile projects for well-known clients, including Paramount, Boeing, Nickelodeon, Parents Empowered, and various Las Vegas-based companies, delivering custom solutions that met specific business requirements.
            </li>
            <li>
              Collaborated with cross-functional teams from design, marketing, and business development to create and implement technical solutions that aligned with client needs and brand strategies.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={oozle} alt="Oozle Media" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer</p>
          <p className="experience-company">Oozle Media</p>
          <p className="experience-dates">Sep 2020 - Jun 2022 • South Jordan, UT</p>
          <ul className="experience-description">
            <li>
              Built and customized 35+ WordPress-based websites utilizing Advanced Custom Fields, creating a content management system tailored to each
              client's specific needs.
            </li>
            <li>
              Maintained all new and previously created websites, implementing regular updates, security patches, and feature enhancements to ensure
              functionality.
            </li>
            <li>
              Performed hosting migrations and website deployments across various environments, minimizing downtime and ensuring consistent
              performance.
            </li>
            <li>
              Optimized websites to meet performance compliance standards (e.g., Core Web Vitals), improving page load speeds, mobile responsiveness, and
              overall user experience metrics. All websites performed above 90% on speed and accessibility tests.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={nfinite} alt="Nfinite Sites" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer</p>
          <p className="experience-company">Nfinite Sites</p>
          <p className="experience-dates">Feb 2019 - Jan 2021 • Draper, Utah</p>
          <ul className="experience-description">
            <li>
              Designed, developed, and supported around 15 websites for small businesses, creating custom solutions that balanced user-friendly interfaces and
              responsive design.
            </li>
            <li>
              Implemented email and SEO marketing campaigns that increased client visibility, improved search rankings, and generated increases in customer
              engagement.
            </li>
            <li>
              Provided ongoing technical support and provided bi-monthly plugin and theme updates where needed.
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={bp} alt="Business Promotion" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer / Technical Support</p>
          <p className="experience-company">Business Promotion</p>
          <p className="experience-dates">Oct 2016 - Feb 2019 • American Fork, UT</p>
          <ul className="experience-description">
            <li>
              Developed and managed custom websites for a large number of clients (100+), delivering tailored solutions that addressed unique business
              requirements and technical specifications across diverse industries.
            </li>
            <li>
              Assisted in building ~20 custom dashboards for various departments in the company (e.g., Retention, Sales, Team Stat Dashboards, etc.),
              transforming complex data into actionable information to increase team efficiency.
            </li>
            <li>
              Collaborated directly with business owners when making changes or when building a new site, ensuring clear communication throughout project
              cycles.
            </li>
            <li>
              Implemented efficient workflow processes such as batch image processing and re-usable template code blocks, which resulted in site build times
              being reduced to 50%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}